"use client"
import React from "react";
import SendSMSComponent from "@/components/sendBulkSms/sendbulksms";
import Layout from "@/components/layout";

const SendSmsPage = () => {
  return (
    <div className="m-2" >
      <Layout children={<SendSMSComponent />} />
    </div>


  );
};

export default SendSmsPage;

