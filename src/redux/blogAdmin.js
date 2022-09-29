export const ADD_BLOG = "ADD_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const CREATE = "CREATE";
export const AUTH_FETCH = "AUTH_FETCH";
export const REFRESH = "REFRESH";

const blogAdmin = {
	loading: null,
	blogs: null,
	error: null,
};

const adminReducer = (state = blogAdmin, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case AUTH_FETCH:
			return {
				loading: false,
				blogs: action.payload,
				error: null,
			};
		case ADD_BLOG:
		case CREATE:
			return {
				...state,
				blogs: [...state.blogs, action.payload],
				loading: false,
				error: null,
			};

		case DELETE_BLOG:
			return {
				...state,
				blogs: state.blogs.filter((blog) => blog.id != action.payload),
				loading: false,
				error: null,
			};
		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case REFRESH:
			return {
				...state,
			};
		default:
			return state;
	}
};
export default adminReducer;
