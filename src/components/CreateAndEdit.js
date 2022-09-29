import { Input, Textarea } from "@rebass/forms";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Heading } from "rebass";
import { ExButton } from "../extends";
import { createBlog } from "../redux/actions";
import "../stylesheets/createdit.scss";

export const CreateBlog = ({ setShow }) => {
	const [name, setName] = useState(null);
	const [details, setDetails] = useState(null);
	const [link, setLink] = useState(null);
	const [image, setImage] = useState(null);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { name, details, link };
		if (image != null) dispatch(createBlog(blog, image, setShow));
		else dispatch(createBlog(blog, (callback = setShow)));
	};
	return (
		<Flex as='form' flexWrap='wrap' className='create-form' onSubmit={handleSubmit}>
			<Heading fontFamily='nun'>Create Post</Heading>
			<Box className='box'>
				<Input
					type='text'
					name='title'
					id='title'
					placeholder='title of your post'
					required={true}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Box>
			<Box className='box'>
				<Textarea
					name='details'
					id='details'
					placeholder='what is your post about'
					required
					onChange={(e) => {
						setDetails(e.target.value);
					}}
				/>
			</Box>
			<Box className='box'>
				<Input
					type='text'
					name='link'
					id='link'
					placeholder='link to affiliate site*'
					onChange={(e) => {
						setLink(e.target.value);
					}}
				/>
			</Box>
			<label
				htmlFor=' blog-image'
				style={{ fontFamily: "nun", color: "#000a", fontSize: "0.9em" }}
			>
				Add an Image
			</label>
			<input
				type='file'
				name='blog-image'
				id='blog-image'
				onChange={(e) => {
					setImage(e.target.files[0]);
				}}
			/>
			<Box>
				<ExButton variant='primary' type='submit'>
					Create post
				</ExButton>
			</Box>
		</Flex>
	);
};
