"use client"
import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SideBarComponent from "@/components/SideBarContainer";
import MakeClaim from "@/components/Claim/Claim";
const DashboardPage = () => {
  return (   
    <div className="bg-[#F5F5F5] h-full">
      <div>
			<Navbar />
				<div className="flex flex-row justify-between w-full bg-[#f8fafc]">
					<div className="w-1/5">
							<SideBarComponent/>
					</div>
          <div className="w-4/5 m-10">
              <MakeClaim/>
          </div>				
				<Footer/>			
				</div>
			</div>
    </div>
  );
};

export default DashboardPage;

