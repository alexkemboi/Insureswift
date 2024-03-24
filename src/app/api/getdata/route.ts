import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function POST(req:Request, res:any) {
    const requestData =  await req.json();
    try {
      const [rows] = await (await ConnectMysql()).promise().query(`SELECT * FROM ${requestData.table}`);
      console.log("server", rows);  
      return NextResponse.json({ message: rows});
   
  } catch (error) {
      console.error('Error fetching data:', error);    
      return NextResponse.json({ message: "error"});
      };
    }