"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaymentIcon from '@mui/icons-material/Payment';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';
import ApplyCover from "@/components/ApplyCover/ApplyCover";
import SideBarComponent from "@/components/SideBarContainer";
const DashboardPage = () => {
  return (   
    <div className="bg-[#F5F5F5] h-full">
      <div>
			<Navbar />
				<div className="flex flex-row justify-between w-full bg-[#f8fafc]">
					<div className="w-1/5">
								<SideBarComponent/>
					</div>
          <div className="w-auto m-10">
              <ApplyCover/>
          </div>
				
				<Footer/>			
				</div>
			</div>
    </div>
  );
};

export default DashboardPage;

