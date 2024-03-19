import React from 'react';
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaymentIcon from '@mui/icons-material/Payment';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';
const SideBarComponent = () => {
  return (
   <>
                        	<Sidebar>
									<Menu>
										<h4 className="text-gray-500 mx-4">General</h4>
										<SubMenu label="Charts" className="hidden">
										</SubMenu>
										<MenuItem > <AssignmentTurnedInIcon className="text-gray-500 text-4xl mx-4"/>Apply Cover </MenuItem>
										<MenuItem> <PaymentIcon className="text-gray-500 text-4xl mx-4"/>Pay premium </MenuItem>
										<MenuItem> <GavelIcon className="text-gray-500 text-4xl mx-4"/>Make Claim </MenuItem>
										<h4 className="text-gray-500 mx-4">Advanced Features</h4>
										<MenuItem> <SettingsIcon className="text-gray-500 text-4xl mx-4"/>System Setup </MenuItem>
									</Menu>
								</Sidebar>
   </>
  );
};

export default SideBarComponent;
