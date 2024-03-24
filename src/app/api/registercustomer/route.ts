import { NextResponse } from "next/server";
import ConnectMysql from "../mysql";
  export async function POST(req:Request, res:any) {
    const requestData =  await req.json();
    const { UserName, PhoneNumber, UserProfile } = requestData;
      try {
        await (await ConnectMysql()).promise().query('INSERT INTO users (UserName, PhoneNumber, UserProfile) VALUES (?, ?, ?)', [UserName, PhoneNumber, UserProfile]);
        await (await ConnectMysql()).promise().query('INSERT INTO Balances (AccountNumber, Balance, UserId) VALUES (?, ?, ?)', [PhoneNumber, 0.00,4]);
        return NextResponse.json({ message:  "Success" });
      } catch (error) {
        return NextResponse.json({ message:  "Erroe" });
      }

  }
  
  
  