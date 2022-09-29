import {
	faEnvelope,
	faHome,
	faHomeAlt,
	faMessage,
	faNewspaper,
	faPager,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Box } from "rebass";
import "../stylesheets/mobile.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Mobile = ({ show }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	return (
		<Box
			className='mobile'
			sx={show == true ? { marginTop: "5px" } : { marginTop: "-1000px" }}
		>
			<div className='wrap'>
				<Box className='nav-item'>
					<Link to='/'>Home</Link>
				</Box>

				<Box className='nav-item'>
					<Link to='/blogs'>Blog</Link>
				</Box>
				<Box className='nav-item'>
					<Link to='/auth/admin'>Admin</Link>
				</Box>
				<Box className='nav-item'>
					<Link to='/contact'>Contact</Link>
				</Box>
				{isAuthenticated == true ? (
					<Box className='nav-item'>
						<Link to='/auth/logout'>Log out</Link>
					</Box>
				) : null}
			</div>
		</Box>
	);
};

export default Mobile;
