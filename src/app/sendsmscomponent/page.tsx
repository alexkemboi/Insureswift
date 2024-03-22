"use client"
import React from "react";
import SendSMSComponent from "@/components/sendBulkSms/sendbulksms";
import Layout from "@/components/layout";

const SendSmsPage = () => {
  return (
    <div >
      <Layout children={<SendSMSComponent />} />
    </div>


  );
};

export default SendSmsPage;

