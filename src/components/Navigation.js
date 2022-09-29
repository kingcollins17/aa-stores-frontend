import React, { useState } from "react";
import "../stylesheets/navigation.scss";
import { Flex, Box, Text, Heading } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Mobile from "../utils/Mobile";
import { Container, Exlink, Wrap } from "../extends";
import { useSelector } from "react-redux";

const Icon = ({ onClick }) => {
	return (
		<Box
			onClick={onClick}
			className='nav-icon'
			sx={{
				"@media screen and (min-width: 768px)": {
					display: "none",
				},
			}}
		>
			<FontAwesomeIcon icon={faNavicon} fontSize='32' color='#666' />
		</Box>
	);
};
const Bar = () => {
	const { isAuthenticated, ...rest } = useSelector((state) => state.auth);
	return (
		<Wrap
			className='bar'
			sx={{
				"@media screen and (max-width: 64em)": {
					display: "none",
				},
			}}
		>
			<Exlink to='/'>Home</Exlink>
			<Exlink to='/auth/admin'>Admin</Exlink>
			<Exlink to='/blogs'>Blog</Exlink>
			<Exlink to='/contact'>Contact</Exlink>
			{isAuthenticated == true ? <Exlink to='/auth/logout'>Log Out</Exlink> : null}
		</Wrap>
	);
};
const Navigation = () => {
	const [menu, setMenu] = useState(false);
	return (
		<Container sx={{ height: "5em", animation: "slideInDown 0.3s linear" }} className='nav'>
			<Wrap sx={{ width: "95%" }} className='wrap'>
				<Text
					as='p'
					lineHeight={"2.5em"}
					fontFamily='heebo'
					fontSize={["1.4rem", "1.6rem"]}
					fontWeight='bold'
					className='logo'
				>
					AA
					<Text as='span' display='inline' color='#000'>
						STORES
					</Text>
				</Text>
				<Bar />
				<Icon
					onClick={(e) => {
						if (menu == false) {
							setMenu(true);
						} else setMenu(false);
					}}
				/>
			</Wrap>
			<Mobile show={menu} />
		</Container>
	);
};

export default Navigation;
