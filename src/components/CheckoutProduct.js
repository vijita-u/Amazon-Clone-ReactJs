import React from "react";
import "./CheckoutProduct.scss";
import { useStateContext } from "../react-context-api/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
	const [state, dispatch] = useStateContext();

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{[...Array(rating)].map(() => (
						<span>⭐</span>
					))}
				</div>
				<button className="removeButton" onClick={removeFromCart}>
					Remove from Cart
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
