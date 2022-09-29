import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "rebass";

const Private = ({ children }) => {
	const { isAuthenticated, ...rest } = useSelector((state) => state.auth);
	return isAuthenticated == false ? (
		<Navigate to='/auth/login' replace={true} />
	) : (
		<Box m={0} width='100%' p={0}>
			{children}
		</Box>
	);
};

export default Private;
