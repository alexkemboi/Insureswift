"use client";
import React from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaymentIcon from '@mui/icons-material/Payment';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LockIcon from '@mui/icons-material/Lock';
import WalletIcon from '@mui/icons-material/Wallet';
import SmsIcon from '@mui/icons-material/Sms';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const SideBarComponent = () => {
	const sidebarItems = [
		{
			label: 'General',
			items: [
				{ icon: <AddHomeIcon className="text-gray-500 text-4xl mx-4" />, text: 'Home', link: '/dashboard' },
				{ icon: <AssignmentTurnedInIcon className="text-gray-500 text-4xl mx-4" />, text: 'Apply Cover', link: '/Applycover' },
				{ icon: <PaymentIcon className="text-gray-500 text-4xl mx-4" />, text: 'Pay Premium', link: '/makepayment' },
				{ icon: <GavelIcon className="text-gray-500 text-4xl mx-4" />, text: 'Make Claim', link: '/claim' },
				{ icon: <WalletIcon className="text-gray-500 text-4xl mx-4" />, text: 'Wallet', link: '/Wallet' },
				{ icon: <HowToRegIcon className="text-gray-500 text-4xl mx-4" />, text: 'Register Customer', link: '/registercustomer' },
				{ icon: <SmsIcon className="text-gray-500 text-4xl mx-4" />, text: 'Sms', link: '/sendsmscomponent' }
			]
		},
		{
			label: 'Advanced Features',
			items: [
				{ icon: <SettingsIcon className="text-gray-500 text-4xl mx-4" />, text: 'System Setup', link: '/setup' },
				{ icon: <LockIcon className="text-gray-500 text-4xl mx-4" />, text: 'Log out', link: '/' }
			]
		}
	];
	return (
		<>
			<div className='mt-20'>

				<Sidebar rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor: "transparent",
						height: '80vh',
					},
					breakPoint: "sm",
					width: 160,
					collapsed: true,
					closeOnClick: true,
					toggled: true
				}}>
					<Menu>
						{sidebarItems.map((section, index) => (
							<div key={index}>
								<h4 className="text-gray-500 mx-4">{section.label}</h4>
								{section.items.map((item, itemIndex) => (
									<MenuItem key={itemIndex} href={item.link}>
										{item.link ? (
											<>{item.icon} {item.text}</>
										) : (
											<>{item.icon} {item.text}</>
										)}
									</MenuItem>
								))}
							</div>
						))}
					</Menu>
				</Sidebar>
			</div>
		</>
	);
};

export default SideBarComponent;
