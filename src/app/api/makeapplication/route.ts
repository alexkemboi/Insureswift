import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';
export async function GET(req:any) {
  try {
    const [rows] = await (await ConnectMysql()).promise().query(`SELECT * FROM users`);
    console.log("server", rows);  
    return NextResponse.json({ message: rows});
 
} catch (error) {
    console.error('Error fetching data:', error);    
    return {
        props: {
            error: 'Failed to fetch data'
        }
    };
  }
}




export async function PUT() {
  return NextResponse.json({ message: 'Hello - PUT' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Hello - DELETE' });
}


