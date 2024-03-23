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
		<div className="mb-5">
			<div className="flex flex-col w-full">
				<div className="m-10">
					<div className=" px-4">
						<div className="mixed-chart">
							<TopCards />
						</div>
					</div>
					<div className="w-full md:w-full flex flex-col md:flex-row gap-6 pt-2 mb-1 px-4">
						<div className="mixed-chart w-full">
							<div className="shadow-lg relative h-[40vh] lg:h-[40vh] mx-auto px-2 border rounded-lg flex-1">
								<div className="h-full w-full sm:w-full sm:h-full">
									{ReactApexChart && <PieChart />}
								</div>
							</div>
						</div>
						<div className="mixed-chart w-full">
							<div className="shadow-lg relative h-[40vh] lg:h-[40vh] mx-auto px-2 border rounded-lg flex-1">
								<div className="h-full w-full sm:w-full sm:h-full">
									{ReactApexChart && <ColumnChart />}
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Dashboard;
