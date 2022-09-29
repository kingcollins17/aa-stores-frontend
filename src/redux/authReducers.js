export const LOGIN = "LOGIN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOAD = "LOAD";
export const LOAD_SUCCESSFUL = "LOAD_SUCCESSFUL";
export const LOAD_FAILED = "LOAD_FAILED";
export const LOGOUT = "LOGOUT";

const authState = {
	isAuthenticated: false,
	user: null,
	token: localStorage.getItem("token"),
	error: null,
	loading: null,
};

export const authReducer = (state = authState, action) => {
	switch (action.type) {
		case LOGIN:
		case LOAD:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESSFUL:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: localStorage.getItem("token"),
				loading: false,
				error: null,
			};
		case LOAD_SUCCESSFUL:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				token: localStorage.getItem("token"),
				loading: false,
			};
		case LOGIN_FAILED:
		case LOAD_FAILED:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				loading: false,
				error: action.payload,
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};
