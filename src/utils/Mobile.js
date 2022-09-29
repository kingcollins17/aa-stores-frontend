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
import { useDispatch, useSelector } from "react-redux";
import { CLOSE } from "../redux/menu";

const Mobile = () => {
	const { menu } = useSelector((state) => state.menu);
	const dispatch = useDispatch();
	React.useEffect(() => {
		if (menu == true)
			dispatch({
				type: CLOSE,
			});
	}, []);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	return (
		<Box
			className='mobile'
			sx={menu == true ? { marginTop: "5px" } : { marginTop: "-1000px" }}
		>
			<div className='wrap'>
				<Box className='nav-item'>
					<Link to='/'>Home</Link>
				</Box>

				<Box className='nav-item'>
					<Link to='/blogs'>Updates</Link>
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
