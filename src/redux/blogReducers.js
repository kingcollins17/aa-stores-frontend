export const GETTING = "GETTING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILED = "GET_FAILED";
export const SEARCH = "SEARCH";
export const STOP = "STOP";

const initialBlogState = {
	blogs: null,
	loading: false,
	error: null,
	searchResult: null,
};

export const blogReducer = (state = initialBlogState, action) => {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				searchResult:
					action.payload != ""
						? state.blogs.filter((blog) =>
								blog.name.toLowerCase().includes(action.payload.toLowerCase().slice(0, 3))
						  )
						: null,
			};
		case GETTING:
			return {
				...state,
				loading: true,
				error: null,
			};
		case STOP:
			return {
				...state,
				loading: false,
			};
		case GET_SUCCESS:
			return {
				...state,
				blogs: action.payload,
				loading: false,
				error: null,
			};
		case GET_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
