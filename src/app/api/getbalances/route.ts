"use server"
import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';
export async function GET() {
  try{
              const [rows] = await (await ConnectMysql()).promise().query('select * from balances'); 
              return NextResponse.json({ data:rows });
                      } catch (error) {
            console.error('Error fetching data:', error);
            return {
                data: 'Failed to fetch data'
              
            };
          } 
}