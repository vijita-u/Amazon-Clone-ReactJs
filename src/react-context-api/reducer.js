export const initialState = {
	cart: [],
	user: null,
};

export const getCartTotal = (cart) =>
	cart?.reduce((initialAmount, item) => Number.parseFloat(item.price) + initialAmount, 0);

// Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item], // previous state + the added item inside the cart
			};

		case "REMOVE_FROM_CART":
			const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.id);
			let cartCopy = [...state.cart];

			if (itemIndex !== -1) {
				cartCopy.splice(itemIndex, 1);
			} else {
				console.warn(`Can't remove product (id: ${action.id} as it's not in the basket!)`);
			}

			return {
				...state,
				cart: cartCopy,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "EMPTY_CART":
			return {
				...state,
				cart: [],
			};

		default:
			return state;
	}
};

export default reducer;
