export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

const generalState = {
	menu: false,
};
const menuReducer = (state = generalState, action) => {
	switch (action.type) {
		case OPEN:
			return {
				menu: true,
			};
		case CLOSE:
			return {
				menu: false,
			};
		default:
			return state;
	}
};
export default menuReducer;
