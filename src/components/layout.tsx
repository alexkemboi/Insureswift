import React, { ReactNode } from "react";
import SideBarComponent from "./SideBarContainer";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex-col md:flex  h-screen w-screen'>
            <Navbar />
            <div className='w-full md:w-full  md:flex'>
                <div className='w-full md:block md:w-1/5 bg-cyan-600 '>
                    <SideBarComponent />
                </div>
                <div className='overflow-y-auto h-full md:w-4/5 p-4 mt-20'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
