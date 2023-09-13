import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateContext } from "../react-context-api/StateProvider";

function Checkout() {
	const [{ cart, user }] = useStateContext();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/PD23/Launches/Platinum_PC_Header_EN_V2.jpg"
					alt=""
				/>
				<div>
					<h3>
						<p>Hello,</p>
						<p>{user ? `${user?.email}` : ""}</p>
					</h3>
					<h2 className="checkout__title">Your Shopping Cart</h2>

					{cart?.map((item) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
