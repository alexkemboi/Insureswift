"use client"
import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SideBarComponent from "@/components/SideBarContainer";
import MakeClaim from "@/components/Claim/Claim";
import Layout from "@/components/layout";

const MakeClaimPage = () => {
  return (

    <div >
      <Layout>
        <MakeClaim />
      </Layout>
    </div>

  );
};

export default MakeClaimPage;

