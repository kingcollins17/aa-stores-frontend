import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Button, Flex } from "rebass";
import { useTheme } from "@emotion/react";
import "../stylesheets/extends.scss";

export const Container = ({ children, ...rest }) => {
	/**
	 * takes in sx prop
	 */
	return (
		<Box as='div' maxWidth='100%' {...rest}>
			{children}
		</Box>
	);
};

export const Wrap = (props) => {
	const { variants } = useTheme();
	return (
		<Box as='div' {...variants.innerBox} {...props}>
			{props.children}
		</Box>
	);
};
export const ExButton = ({ children, variant, ...rest }) => {
	const { buttons } = useTheme();
	const getVariant = (v) => {
		switch (v) {
			case "primary":
				return buttons.primary;
			case "secondary":
				return buttons.secondary;
			default:
				break;
		}
	};
	const val = getVariant(variant);
	return (
		<Button {...val} {...rest}>
			{children}
		</Button>
	);
};

// custom blog card component
export const BlogCard = ({ component: Component, src, duration, ...props }) => {
	return (
		<Flex
			{...props}
			flexWrap='wrap'
			id='card'
			sx={{
				animation: `backInUp ${duration}s linear`,
			}}
		>
			{src ? (
				<Box width={[1, 1, 1, 2 / 5, 2 / 5]} height={["200px", "300px", "320px"]}>
					<Image src={src} alt='' width='100%' height='100%' />
				</Box>
			) : null}
			<Box width={src ? [1, 1, 1, 3 / 5, 3 / 5] : 1}>{Component}</Box>
		</Flex>
	);
};

export const Avatar = (props) => {
	return (
		<Image
			{...props}
			sx={{
				width: 48,
				height: 48,
				borderRadius: 9999,
			}}
		/>
	);
};
export const Exlink = ({ to, children, ...rest }) => {
	const { link } = useTheme();
	return (
		<Link to={to} style={link.primary} {...rest}>
			{children}
		</Link>
	);
};
