"use client"
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopCards from "../TopCards";
import ColumnChart from "../ApexCharts/ColumnChart";
import PieChart from "../ApexCharts/PieChart";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaymentIcon from '@mui/icons-material/Payment';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';

const Dashboard = () => {
	return (
		<div>
			<Navbar />
				<div className="flex flex-row justify-between w-full bg-[#f8fafc]">
					<div className="w-1/5">
								<Sidebar>
									<Menu>
										<h4 className="text-gray-500 mx-4">General</h4>
										<SubMenu label="Charts" className="hidden">
										</SubMenu>
										<MenuItem > <AssignmentTurnedInIcon className="text-gray-500 text-4xl mx-4"/>Apply Cover </MenuItem>
										<MenuItem> <PaymentIcon className="text-gray-500 text-4xl mx-4"/>Pay premium </MenuItem>
										<MenuItem> <GavelIcon className="text-gray-500 text-4xl mx-4"/>Make Claim </MenuItem>
										<h4 className="text-gray-500 mx-4">Advanced Features</h4>
										<MenuItem> <SettingsIcon className="text-gray-500 text-4xl mx-4"/>System Setup </MenuItem>
									</Menu>
								</Sidebar>
					</div>
					<div className="flex flex-col w-4/5">								
									<div className="m-10">
											<div className=" px-4">
												<TopCards/>								
											</div>								
											<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 pt-2 mb-1 px-4">
												<PieChart />
												<ColumnChart />						
											</div>					
									</div>
					</div>
				<Footer/>			
				</div>
			</div>
	);
};

export default Dashboard;
