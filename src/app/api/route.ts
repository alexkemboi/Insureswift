"use server"
import ConnectMysql from "./mysql";
import { NextResponse } from 'next/server';
export async function GET() {
  try{
              const [rows] = await (await ConnectMysql()).promise().query('select * from users'); 
              return NextResponse.json({ message: 'Hello - GET',data:rows });
                      } catch (error) {
            console.error('Error fetching data:', error);
            return NextResponse.json({
              props: {
                error: 'Failed to fetch data'
              }
            });
          } 
}

export async function POST() {
  
  return NextResponse.json({ message: 'Hello - POST' });
}

export async function PUT() {
  return NextResponse.json({ message: 'Hello - PUT' });
}

// export default async function DELETE() {
//   return NextResponse.json({ message: 'Hello - DELETE' });
// }