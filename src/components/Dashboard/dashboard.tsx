import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopCards from "../TopCards";
import AreaChart from "../ApexCharts/AreaChart";
import BarChart from "../ApexCharts/barChart";
import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col">
			<div className="">
				<Navbar />
			</div>
			<div className="mt-12 p-4">
			<div className="h-auto pb-10">
			<div>
				
				<TopCards />
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 py-2 ">
				<BarChart />
				<AreaChart />
				
			</div>
	
		</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
