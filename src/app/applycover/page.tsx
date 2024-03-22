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
import Layout from "@/components/layout";

const ApplyCoverPage = () => {
  return (

    <div >
      <Layout children={<ApplyCover />} />
    </div>

  );
};

export default ApplyCoverPage;

