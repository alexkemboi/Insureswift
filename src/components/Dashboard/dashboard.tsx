"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopCards from "../TopCards";
import ColumnChart from "../ApexCharts/ColumnChart";
import PieChart from "../ApexCharts/PieChart";

const Dashboard = () => {

	const [ReactApexChart, setChart] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setChart(() => require("react-apexcharts").default);
		}
	}, []);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setChart(() => require("react-apexcharts").default);
		}
	})
	return (
		<div>
			<div className="flex flex-col w-full">
				<div className="m-10">
					<div className=" px-4">
						<div className="mixed-chart">

							<TopCards />

						</div>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 pt-2 mb-1 px-4">
						<div className="mixed-chart">
							<div className='w-full shadow-lg md:col-span-1 relative lg:h-[40vh] h-[40vh] mx-auto px-2 border rounded-lg bg-[#ffffff]'>
								<div className='h-full w-auto sm:w-full sm:h-full'>
									{ReactApexChart && <PieChart />}
								</div>
							</div>
							<div className="mixed-chart">
								{ReactApexChart && <ColumnChart />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
