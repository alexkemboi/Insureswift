"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import Tooltip from "@mui/material/Tooltip";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import profilepivc from "../../../public/image/autquiaut.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		// Your function logic
	};
    
	const handleLogout = async () => {
        setAnchorEl(null);
        router.push('/login');
		// setLoading(true)
	};

	const iconstyle = "black";
	return (
		<>
			<Box sx={{ flexGrow: 1 }} className="mt-20 bg-cyan-600">
				<AppBar					
					className="flex justify-between h-15 text-slate-50 bg-cyan-600">
					<Toolbar className="flex justify-between bg-cyan-600">
						<div className="flex ">
							<MenuIcon className="text-slate-50 text-4xl mx-4"/>
							<h6 className="pl-4 text-slate-50 text-2xl font-semibold">Insure Swift</h6>
						</div>						
							<div className="flex">
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Help"
										arrow
										>
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{ mr: 2 }}>
											<HelpOutlineRoundedIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Contact us"
										arrow
										className="text-blue">
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{ mr: 2 }}>
											<AddIcCallSharpIcon className={iconstyle}/>
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="About"
										arrow
										className="text-slate-50">
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{ mr: 2 }}>
											<FeedSharpIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<Typography
									fontSize={14}
									component="div">
									<Tooltip
										title="Change password"
										arrow
										className="text-slate-50">
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{ mr: 2 }}>
											<LockOpenSharpIcon className={iconstyle} />
										</IconButton>
									</Tooltip>
								</Typography>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit">
									
									<Image
										width={30}
										height={20}
										src={profilepivc}
										alt="pic"
										className="rounded-lg items-center justify-center"
									/>
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}>										
									<MenuItem onClick={handleClose} className="bg-slate-50">Profile</MenuItem>
									<MenuItem onClick={handleClose} className="bg-slate-50">My account</MenuItem>
									<MenuItem onClick={handleLogout} className="bg-slate-50">
										Log out
									</MenuItem>
								</Menu>
							</div>						
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}
