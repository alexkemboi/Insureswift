import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function POST(req:Request, res:any) {
    try {
      
        const {policyId, userId, claimDate, claimStatus, approved, description, payout, currency } = await req.json();
  
        // Execute SQL INSERT statement to insert values into the claims table
        const result =  await (await ConnectMysql()).promise().query(
          'INSERT INTO claims (PolicyID, UserId, ClaimDate, ClaimStatus, Approved, Description, Payout, Currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [policyId, userId, claimDate, 1, 1, description, payout, currency]
        ); 
        // const customerbalance =  await (await ConnectMysql()).promise().query(
        //   `UPDATE balances set Balance=((select Balance from balances WHERE AccountNumber=(select PhoneNumber from users where UserID=${userId}))+${payout}) WHERE AccountNumber=(select PhoneNumber from users where UserID=${userId})`
        // ); 
        // const insuraerbalance =  await (await ConnectMysql()).promise().query(
        //   `UPDATE balances set Balance=((select Balance from balances where AccountNumber='+256700112233')-${payout}) WHERE AccountNumber='+256700112233'`
        // ); 
              // Update customer's balance
              const updateCustomerBalance = await (await ConnectMysql()).promise().query(
                `UPDATE balances b1
                 JOIN (SELECT b2.Balance AS currentBalance 
                       FROM balances b2 
                       JOIN users u ON b2.AccountNumber = u.PhoneNumber 
                       WHERE u.UserID = ${userId}) AS temp 
                 SET b1.Balance = temp.currentBalance + ${payout} 
                 WHERE b1.AccountNumber = (SELECT PhoneNumber FROM users WHERE UserID = ${userId})`
            );
    
            // Update insurer's balance
            const updateInsurerBalance = await (await ConnectMysql()).promise().query(
                `UPDATE balances 
                 SET Balance = Balance - ${payout} 
                 WHERE AccountNumber = '+256700112233'`
            );
        const creditTransaction =  await (await ConnectMysql()).promise().query(
          `INSERT INTO transhhistory (UserId, PolicyId, TransactionDate, Amount, DRAccount, CRAccount, Description)
          VALUES ( 3, ${policyId}, '2024-03-01 10:00:00', ${payout}, 'Medical', 'Bank', '${description}') `
        ); 
        // const debitTransaction =  await (await ConnectMysql()).promise().query(
        //   ``
        // ); 

        // Return success response
        const [phine] =  await (await ConnectMysql()).promise().query(
          `select PhoneNumber from users where UserId=${userId}`
        ); 
        const data:any={phone:phine}
        console.log(data.phone)
        const smsData = {
          message: `CONGRATULATIONS-You claim has been approved.You account has been credited UGX ${payout}. Thank you for choosing us`,
          phone: data.phone[0].PhoneNumber
        };

        const smsResponse = await fetch('http://localhost:3000/api/sendsms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(smsData)
        });
       return NextResponse.json({ message: 'Claim submitted successfully' });
      } catch (error) {
        console.error('Error:', error);
       return NextResponse.json({ message: 'Failed to submit claim' });
      }
  }