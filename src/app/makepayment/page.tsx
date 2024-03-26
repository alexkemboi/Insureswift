"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SideBarComponent from "@/components/SideBarContainer";
import MakePayment from "@/components/Payment/Payment";
import Layout from "@/components/layout";

const PaymentPage = () => {
  return (

    <div>
      <Layout ><MakePayment /></Layout>
    </div>

  );
};

export default PaymentPage;

