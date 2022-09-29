import axios from "axios";
import {
	LOGIN,
	LOGIN_SUCCESSFUL,
	LOGIN_FAILED,
	LOAD,
	LOAD_SUCCESSFUL,
	LOAD_FAILED,
	LOGOUT,
} from "./authReducers";
import { REFRESH, AUTH_FETCH, CREATE, DELETE_BLOG, ERROR, LOADING } from "./blogAdmin";
import { GETTING, GET_SUCCESS, GET_FAILED } from "./blogReducers";

const DOMAIN = "http://aa-stores.herokuapp.com";
// ------------------------------------
export const fetchBlogs = () => (dispatch) => {
	// dispatch the action of fetching users.
	dispatch({
		type: GETTING,
	});
	axios
		.get(`${DOMAIN}/blogs`)
		.then((res) => {
			dispatch({
				type: GET_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_FAILED,
				payload: err.response.message,
			});
		});
};

/**
 *
 */
export const login = (username, password) => (dispatch) => {
	dispatch({
		type: LOGIN,
	});

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({ username, password });
	axios
		.post(`${DOMAIN}/auth/login/`, body, config)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESSFUL,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: LOGIN_FAILED,
				payload: err.response.message,
			});
		});
};

export const loadUser = () => (dispatch) => {
	dispatch({
		type: LOAD,
	});
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	if (token) config.headers["Authorization"] = `Token ${token}`;

	axios
		.get(`${DOMAIN}/auth/user`, config)
		.then((res) => {
			dispatch({
				type: LOAD_SUCCESSFUL,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: LOAD_FAILED,
				payload: err.response.message,
			});
		});
};

// ----------------------------------------------------------------
export const logOut = () => (dispatch, getState) => {
	dispatch({
		type: LOAD,
	});
	const token = getState().auth.token;
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	if (token) config.headers["Authorization"] = `Token ${token}`;
	const body = "";
	axios
		.post(`${DOMAIN}/auth/logout/`, body, config)
		.then((res) => {
			dispatch({
				type: LOGOUT,
			});
		})
		.catch((err) => {});
};
// -----------------------------------------------------------
// ==========================================================

export const authFetchBlogs = () => (dispatch, getState) => {
	const token = getState().auth.token;
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	if (token) config.headers["Authorization"] = `Token ${token}`;
	axios
		.get(`${DOMAIN}/auth/blogs/0`, config)
		.then((res) => {
			dispatch({
				type: AUTH_FETCH,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: err.message,
			});
		});
};
export const createBlog =
	(blog, image = null, callback) =>
	(dispatch, getState) => {
		dispatch({
			type: LOADING,
		});
		const token = getState().auth.token;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		if (token) config.headers["Authorization"] = `Token ${token}`;
		const body = JSON.stringify(blog);
		axios
			.post(`${DOMAIN}/auth/blogs/0`, body, config)
			.then((res) => {
				dispatch({
					type: CREATE,
					payload: res.data,
				});
				if (image != null)
					addImage(image, res.data.id, token, () => {
						dispatch({
							type: REFRESH,
						});
					});
				callback();
			})
			.catch((err) => {
				dispatch({
					type: ERROR,
					payload: err.message,
				});
			});
	};
const addImage = (img, id, tk = null, c) => {
	const token = localStorage.getItem("token");
	const config = {
		headers: {
			"Content-Disposition": `attatchment;filename=${img.name}`,
		},
	};
	if (tk) config.headers["Authorization"] = `Token ${tk}`;
	else if (token) config.headers["Authorization"] = `Token ${token}`;
	axios
		.post(`${DOMAIN}/blogs/image/${id}`, img, config)
		.then((res) => {
			c();
			window.location.reload();
		})
		.catch((err) => console.log(err));
};

export const deleteBlog = (blogId) => (dispatch, getState) => {
	dispatch({
		type: LOADING,
	});
	const token = getState().auth.token;
	const config = {
		headers: {},
	};
	if (token) config.headers["Authorization"] = `Token ${token}`;
	console.log(token);
	axios
		.delete(`${DOMAIN}/auth/blogs/${blogId}`, config)
		.then((res) => {
			dispatch({
				type: DELETE_BLOG,
				payload: blogId,
			});
		})
		.catch((err) => {
			dispatch({
				type: ERROR,
				payload: err.message,
			});
		});
};
