"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SideBarComponent from "@/components/SideBarContainer";
import MakePayment from "@/components/Payment/Payment";
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
              <MakePayment/>
          </div>				
				<Footer/>			
				</div>
			</div>
    </div>
  );
};

export default DashboardPage;

