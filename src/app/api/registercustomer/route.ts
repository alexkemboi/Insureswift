import { NextResponse } from "next/server";
import ConnectMysql from "../mysql";
  export async function POST(req:Request, res:any) {
    const requestData =  await req.json();
    const { UserName, PhoneNumber, UserProfile } = requestData;
      try {
        await (await ConnectMysql()).promise().query('INSERT INTO users (UserName, PhoneNumber, UserProfile) VALUES (?, ?, ?)', [UserName, PhoneNumber, UserProfile]);
        return NextResponse.json({ message:  "Success" });
      } catch (error) {
        return NextResponse.json({ message:  "Erroe" });
      }

  }
  
  
  