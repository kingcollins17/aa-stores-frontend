import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@rebass/forms";
import { Flex, Box, Heading, Text } from "rebass";
import { ExButton, Wrap } from "../extends";
import "../stylesheets/contactpage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faDiscord,
	faFacebookF,
	faGoogle,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = ({ width, show }) => {
	const [sent, setSent] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	return (sent == false) & (show == true) ? (
		<Flex
			as='form'
			flexWrap='wrap'
			width={width}
			className='form-grid'
			margin='auto'
			onSubmit={() => {
				setSent(true);
			}}
		>
			<Heading fontFamily='nun' fontSize='1.6em'>
				Send a Message
			</Heading>
			<br />
			<Box width={[1, 1 / 2]}>
				<Input
					name='name'
					type='text'
					fontFamily='nun'
					placeholder='your name'
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Box>
			<Box width={[1, 1 / 2]}>
				<Input
					name='email'
					type='email'
					fontFamily='nun'
					placeholder='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Box>
			<Box>
				<Textarea
					name='message'
					fontFamily='nun'
					width={1}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
			</Box>
			<Box>
				<ExButton variant='primary' width={1} type='submit'>
					Send message
				</ExButton>
			</Box>
		</Flex>
	) : sent == true ? (
		<Wrap width={"60%"}>
			<Text fontFamily='nun' py={2}>
				Thanks @{email} for contacting us, we would get back you to soon
			</Text>
		</Wrap>
	) : null;
};

const GetInTouch = ({ width }) => {
	return (
		<Box width={width} className='connect'>
			<Box margin='auto' width='85%' className='wrap'>
				<Heading fontFamily='nun' fontSize='1.5em'>
					Get in touch
				</Heading>
				<Box>
					<FontAwesomeIcon icon={faPhone} />
					<Box className='icon-desc'>
						<Text as='p'>Phone</Text>
						<Text as='p'>+234-8037485529</Text>
					</Box>
				</Box>
				<Box>
					<FontAwesomeIcon icon={faAddressCard} />
					<Box className='icon-desc'>
						<Text as='p'>Address</Text>
						<Text as='p'>Enugu, Nigeria</Text>
					</Box>
				</Box>
				<Box>
					<FontAwesomeIcon icon={faMessage} />
					<Box className='icon-desc'>
						<Text as='p'>Email</Text>
						<Text as='p'>aasokamchiani@gmail.com</Text>
					</Box>
				</Box>
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
			</Box>
		</Box>
	);
};

const ContactPage = ({ show }) => {
	return (
		<Flex
			flexWrap='wrap'
			width='95%'
			margin=' 2em auto'
			className='contact-page'
			sx={{ animation: "slideInUp 0.4s linear" }}
		>
			<Box width={[1, 1, 1, 3 / 5]}>
				<ContactForm width='90%' show={show} />
			</Box>
			<GetInTouch width={[1, 1, 1, 2 / 5]} />
		</Flex>
	);
};

export default ContactPage;
