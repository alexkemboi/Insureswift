"use server"
import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';
export async function GET() {
  try{       
      const [rows] = await (await ConnectMysql()).promise().query('select * from balances'); 
      return NextResponse.json({ data:rows });
      } 
      catch (error) {          
            return NextResponse.json({data: 'Failed to fetch data'});
          } 
}
export async function PUT() {
  return NextResponse.json({ message: 'Hello - PUT' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Hello - DELETE' });
}

export async function POST() {
  return NextResponse.json({ message: 'Hello - DELETE' });
}