import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function POST(req:Request, res:any) {
    const { fullName, emailAddress, phoneNumber, insuranceType, dateOfBirth, agreeToTerms } =  await req.json();
    //const requestData =  await req.json();
    try {
      const [rows] = await (await ConnectMysql()).promise().query(`INSERT INTO applications (full_name, email_address, phone_number, insurance_type, date_of_birth, agree_to_terms) VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, emailAddress, phoneNumber, insuranceType, dateOfBirth, agreeToTerms]);     
      return NextResponse.json({ message: 'Application submitted successfully' });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ message: 'Failed to submit application' });
    }
  }