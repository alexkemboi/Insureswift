"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ApplyCover from "@/components/ApplyCover/ApplyCover";

import Layout from "@/components/layout";
import SystemSetup from "@/components/Setup/Setup";

const SetupPage = () => {
  return (

    <div className='m-2 border border-solid rounded ' >
      <Layout children={<SystemSetup />} />
    </div>

  );
};

export default SetupPage;

