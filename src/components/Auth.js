import { Input, Label } from "@rebass/forms";
import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "rebass";
import { ExButton, Exlink, Wrap } from "../extends";
import "../stylesheets/auth.scss";
import { login, logOut } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { WrapLoader } from "./Blog";
import Loader from "react-spinners/CircleLoader";
import Private from "./PrivateRoute";

const FormShow = ({ type, username, password, email, submit, ...rest }) => {
	return (
		<Flex
			as='form'
			flexWrap='wrap'
			fontFamily='heebo'
			{...rest}
			className='auth-form'
			margin={"auto"}
			onSubmit={submit}
		>
			{type == "signup" ? (
				<Heading fontFamily='rubik' my={2} fontSize={"2rem"} fontWeight={["600", "700"]}>
					Sign Up
				</Heading>
			) : (
				<Heading fontFamily='rubik' my={2} fontSize={"2rem"} fontWeight={["600", "700"]}>
					Login
				</Heading>
			)}
			<Box className='username'>
				<Label htmlFor='username'>Username</Label>
				<Input name='username' id='username' username onChange={username} />
			</Box>
			{type == "signup" ? (
				<Box className='email'>
					<Label htmlFor='email'>Email</Label>
					<Input type='email' name='email' id='email' onChange={email} />
				</Box>
			) : null}
			<Box className='password'>
				<Label htmlFor='password'>Password</Label>
				<Input type='password' name='password' id='password' onChange={password} />
			</Box>
			<Box>
				{type == "signup" ? (
					<ExButton variant='primary' type='submit'>
						Sign Up
					</ExButton>
				) : (
					<ExButton variant='primary' type='submit'>
						Login
					</ExButton>
				)}
			</Box>
		</Flex>
	);
};

const LogOutAll = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(logOut());
	});
	return isAuthenticated == false ? (
		<Navigate to='/' />
	) : (
		<WrapLoader>
			<Loader loading={true} size={25} />
		</WrapLoader>
	);
};
export const LogOut = () => (
	<Private>
		<LogOutAll />
	</Private>
);
export const SignUp = () => {
	return (
		<Box width='100%' className='sign-up'>
			<Wrap width={["90%", "80%", "50%", "40%"]} className='wrap' my={4}>
				<FormShow type='signup' />
				<Text as='p' fontFamily='nun' textAlign='center'>
					Already have an account?{" "}
					<Exlink to='/auth/login' sx={{ color: "#f62b45" }}>
						login
					</Exlink>
				</Text>
			</Wrap>
		</Box>
	);
};

const Login = () => {
	const { isAuthenticated, ...rest } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [username, setUser] = useState();
	const [password, setPass] = useState();
	const nameCallback = (e) => {
		setUser(e.target.value);
	};
	const passCallback = (e) => {
		setPass(e.target.value);
	};
	const handleSubmit = (uname, pass) => {
		console.log(uname);
		console.log(pass);
		dispatch(login(uname, pass));
	};
	React.useEffect(() => {
		document.title = "Login";
	}, []);

	return isAuthenticated == true ? (
		<Navigate to='/auth/admin' />
	) : (
		<Box width='100%' className='sign-up'>
			<Wrap width={["90%", "80%", "50%", "40%"]} className='wrap' my={4}>
				<FormShow
					type='login'
					username={nameCallback}
					password={passCallback}
					submit={(e) => {
						e.preventDefault();
						handleSubmit(username, password);
					}}
				/>
				<Text as='p' fontFamily='nun' textAlign='center'>
					Dont have an account?{" "}
					<Exlink to='/' sx={{ color: "#f62b45" }}>
						contact admin
					</Exlink>
				</Text>
			</Wrap>
		</Box>
	);
};

export default Login;
