"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from 'next/navigation';
import getServerSideProps from "@/app/api/getuser";


const Login = () => {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const router = useRouter();
	const handleLogin = (e: any) => {
		e.preventDefault();
		const inputField1 = document.getElementById("email") as HTMLInputElement;
		const inputField2 = document.getElementById("password") as HTMLInputElement;
		if (inputField1 && inputField2) {
			const userName = inputField1.value;
			const password = inputField2.value;
			const credentials = {
				username: userName,
				password: password
			};

			fetchData(credentials)
		} else {
			return null;
		}
	};
	async function fetchData(credentials: any) {
		try {

			const response = await getServerSideProps(credentials);
			setError(false);
			setSuccess(false);
			setData(response.props.data);
			if (data.length > 0) {
				setError(false);
				setSuccess(true);
				router.push('/dashboard');
				const { username, password } = credentials;

			} else if (data.length === 0) {
				setError(true);
				setSuccess(false);
			}

		} catch (error) {
			console.error('Error:', error);
		}
	}
	useEffect(
		() => {
			//fetchData() 
		}, []);


	return (
		<div className="min-h-screen flex items-center justify-center">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
				<MenuIcon className="text-black text-4xl mr-4" />
				<h1 className="font-bold text-2xl text-center mb-1 text-blue-500 rounded  hover:text-blue-700">
					Insure Swift
				</h1>
				{success && (<h4 className="text-green-500 text-center">Successfull</h4>)}
				<div className="mb-4">
					{error && (<h4 className="text-red-500 text-center">Error,please check your credentials</h4>)}

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
				</div>
			</form>
		</div>
	);
};

export default Login;
