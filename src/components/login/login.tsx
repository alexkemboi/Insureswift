"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
const Login = () => {
	const router = useRouter();
	const handleLogin = () => {
		router.push('/dashboard');
	};
	return (
		<div className="min-h-screen flex items-center justify-center">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
				<h1 className="font-bold text-2xl text-center mb-1 text-blue-500 rounded">
					Pendo Bakery Management System
				</h1>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email">
						Email:
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Email"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password">
						Password:
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
