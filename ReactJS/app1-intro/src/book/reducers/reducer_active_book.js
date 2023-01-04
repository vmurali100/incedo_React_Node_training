export default function active(state = null, action) {
	switch (action.type) {
	case "BOOK_SELECTED":
		return action.payload;
	default:
		return state;
	}
}
