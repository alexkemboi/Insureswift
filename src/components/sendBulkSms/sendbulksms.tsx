"use client";
import { useState } from 'react';
const SendSMSComponent = () => {
  const [userdata, setData] = useState<{ UserId: number, UserName: string, PhoneNumber: string, UserProfile: any, PledgeAmount: any, AmountPaid: any, visible: any }[]>([]);
  const fetchData = async (table: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/getdata", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ table: table }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data.message)
      return data.message;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const sendSms = async (sendOption: { mesage?: any, username?: any, to?: string, case: string, pledge?: number, balance?: number }) => {
    let smsResponse: any = ''
    let message: string = ''
    let balance: number = 0
    switch (sendOption.case) {
      case "5":
        const data = await fetchData("users")
        data.filter((row: any) => row.visible === 1).map(async (smsdata: any) => {
          let balance: number = (smsdata.PledgeAmount - smsdata.AmountPaid);
          if (balance === 0) {
            message = `KIMUU CONTRIBUTIONS-Dear ${smsdata.UserName},Thank you for pledging KES ${smsdata.PledgeAmount}.00 to KIMUU'S fee and clearing the full amount before the March deadline.God bless you ${smsdata.UserName}`;
          } else if (balance > 0) {
            message = `KIMUU CONTRIBUTIONS-Dear ${smsdata.UserName},Thank you for pledging KES ${smsdata.PledgeAmount}.00 to KIMUU's Fee. Please honor your balance of KES ${balance}.00.The March deadline is fast approching.God bless you ${smsdata.UserName}`;
          } else {
            message = "KIMUU CONTRIBUTIONS-Thank you for your commitment. Kindly make your payment.";
          }
          try {
            smsResponse = await fetch('http://localhost:3000/api/sendsms', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ message: message, phone: smsdata.PhoneNumber })
            });
            if (smsResponse.ok) {
              console.log("success")
            } else {
              console.log("Failed to send an sms")
            }
          } catch (error) {
            console.log("internal server error")
          }
        })

        break
      case "6":
        if (sendOption && sendOption.balance !== undefined) {
          if (sendOption.balance === 0) {
            message = `KIMUU CONTRIBUTIONS-Dear ${sendOption.username},Thank you for pledging KES ${sendOption.pledge}.00 to KIMUU'S Fee and clearing the full amount before the March deadline.God bless you ${sendOption.username}`;
          } else if (sendOption.balance > 0) {
            message = `KIMUU CONTRIBUTIONS-Dear ${sendOption.username},Thank you for pledging KES ${sendOption.pledge}.00 towards KIMUU'S Fee. Please honor your balance of KES ${sendOption.balance}.00.The March deadline is fast approching.God bless you ${sendOption.username}`;
          } else {
            message = "KIMUU CONTRIBUTIONS-Thank you for your commitment. Kindly make your payment.";
          }
        }
        try {
          smsResponse = await fetch('http://localhost:3000/api/sendsms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message, phone: sendOption.to })
          });
          if (smsResponse.ok) {
            console.log("success")
          } else {
            console.log("Failed to send an sms")
          }
        } catch (error) {
          console.log("internal server error")
        }
        break
      default:
        console.log("Case doesnt exist")
        break
    }
  }

  return (
    <div className="p-4 m-10 border border-solid-red rounded w-4/5 overflow-y-scroll h-96">
      <h4 className='text-2xl font-bold'>Audit Log</h4>
      <button className="bg-blue-500 hover:bg-blue-700 text-gray-50 font-bold py-2 px-4 rounded mr-2" onClick={() => fetchData('users')}>Fetch Data</button>
      <button className="bg-green-500 hover:bg-green-700 text-gray-50 font-bold py-2 px-4 rounded" onClick={() => sendSms({ case: "1" })}>Send Bulk</button>
      <table className="table-auto mt-2 w-full h-auto">
        <thead>
          <tr>
            <th className=" border px-4 py-2">User Name</th>
            <th className=" border px-4 py-2">Phone Number</th>
            {/* <th className=" border px-4 py-2">Pledge Amount</th>
            <th className=" border px-4 py-2">Paid Amount</th> */}
            <th className=" border px-4 py-2">User Id</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.filter((rows) => rows.visible === 0).map((row: any) => (
            <tr key={row.UserId} className="bg-gray-100">
              <td className="border px-4 py-2">{row.UserName}</td>
              <td className="border px-4 py-2">{row.PhoneNumber}</td>
              {/* <td className="border px-4 py-2">{row.PledgeAmount}</td>
              <td className="border px-4 py-2">{row.AmountPaid}</td> */}
              <td className="border px-4 py-2">{row.UserId}</td>
              <td className="border px-4 py-2"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={() => sendSms({ username: row.UserName, to: row.PhoneNumber, case: "2", balance: (row.PledgeAmount - row.AmountPaid), pledge: row.PledgeAmount })}>Send SMS</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SendSMSComponent;
