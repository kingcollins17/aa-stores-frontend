import React, { useContext } from "react";
import { Box, Text, Link, Button } from "rebass";
import "../stylesheets/landing.scss";
import { useTheme } from "@emotion/react";
import { Container, ExButton, Wrap } from "../extends";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faFacebookF,
	faGoogle,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CLOSE } from "../redux/menu";
// import { withData } from '../utils/contexts';
/**
 * landing page display
 * @contains wrap and container components and nav icons
 *
 */
const Landing = () => {
	const { buttons } = useTheme();
	const dispatch = useDispatch();
	useEffect(() => {
		document.title = "Welcome";
		dispatch({
			type: CLOSE,
		});
	}, []);
	return (
		<Container className='landing'>
			<Wrap width={["90%", "80%"]} className='content'>
				<Box
					color='#fff'
					className='wrap-icons'
					width='12em'
					fontSize={20}
					sx={{
						"@media screen and (max-width: 768px)": {
							margin: "0 auto",
						},
					}}
				>
					<a href='#'>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faGoogle} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
				</Box>
				<Box className='welcome' as='div'>
					<Text fontFamily='heebo' fontSize={[4, 5, 6]} color='#fffe'>
						Welcome to,
					</Text>
					<Text className='brand' fontSize={[6, 8]} fontWeight={["500", "600"]}>
						AA
						<Text display='inline' color='#fffd'>
							STORES
						</Text>
					</Text>
					<Text
						className='motto'
						fontSize={["0.9rem", "1rem", "1.1rem"]}
						fontFamily='rubik'
						color='#fffb'
					>
						Product ads{" & "} promotions
					</Text>
					<ExButton variant='primary' sx={{ width: "150px", borderRadius: "20px" }}>
						Learn more
					</ExButton>
				</Box>
			</Wrap>
		</Container>
	);
};

export default Landing;
