"use server"
import { NextResponse } from "next/server";
import ConnectMysql from "./mysql";
export default async function getServerSideProps() {
    try{
          const [rows] = await (await ConnectMysql()).promise().query('select * from users');
          console.log("server",rows);
          return {
              props: {
                data: rows
              }
            };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            error: 'Failed to fetch data'
          }
        };
      }
    
  }