"use client"
import React from "react";
import Register from "@/components/RegisterCustomer/registercustomer";
import Layout from "@/components/layout";


const RegisterPage = () => {
  return (

    <div >
      <Layout children={<Register />} />
    </div>


  );
};

export default RegisterPage;

