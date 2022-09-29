import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Box, Text } from "rebass";
import { Wrap } from "../extends/index.js";
import "../stylesheets/footer.scss";

const Footer = () => {
	return (
		<Box width='100%' bg='#343a40' className='footer' py={2}>
			<Wrap width={["98%", "90%", "80%"]} className='wrap'>
				<Text as='p' fontSize={["0.8em", "1em"]}>
					&copy; 2022, all rights reserved
				</Text>
				<Box className='icx'>
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faFacebookF} />
				</Box>
			</Wrap>
		</Box>
	);
};

export default Footer;
