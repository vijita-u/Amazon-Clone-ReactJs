import React from "react";
import "./Product.scss";
import { useStateContext } from "../react-context-api/StateProvider";

function Product({ id, title, price, rating, image, alt }) {
	const [state, dispatch] = useStateContext();

	const addToCart = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>₹</small>
					<strong>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
				</p>
				<div className="product__rating">
					{[...Array(rating)].map(() => (
						<span>⭐</span>
					))}
				</div>
			</div>
			<img src={image} alt={alt} />
			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
}

export default Product;
