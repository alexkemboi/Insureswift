"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from 'next/navigation';
import getServerSideProps from "@/pages/api/getdata";

const Login = () => {
	const [data, setData] = useState<any>([]); 
	const router = useRouter();
	const handleLogin = () => {	
			
		//router.push('/dashboard');
	};
async function fetchData() {	
		 try {
		const response= await getServerSideProps();		
		setData(response.props.data);
		console.log(response.props.data);
	  } catch (error) {
		console.error('Error:', error);
	  }
}
useEffect(
	()=>{
		fetchData() 
	} ,[]);


	return (
		<div className="min-h-screen flex items-center justify-center">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
			<MenuIcon className="text-black text-4xl mr-4"/>
				<h1 className="font-bold text-2xl text-center mb-1 text-blue-500 rounded  hover:text-blue-700">
				Insure Swift
				</h1>
				<div className="mb-4">
					<label
						className="block text-[#333333] text-sm font-bold mb-2"
						htmlFor="email">
						Email:
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Email"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-[#333333] text-sm font-bold mb-2"
						htmlFor="password">
						Password:
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="Password"
						required
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
					onClick={handleLogin}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">Login</button>
					<div>
						<h1>Dynamic Data from MySQL</h1>
						<ul>
							{data.map((item:any) => (
							<li key={item.UserId}>{item.UserName}</li>
							))}
						</ul>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
