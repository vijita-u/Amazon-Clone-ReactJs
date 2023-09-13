import React, { useEffect, useState } from "react";
import "./Payment.scss";
import { useStateContext } from "../react-context-api/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../react-context-api/reducer";
import axios from "../axios/axios";
import { db } from "../firebase/firebaseConfig";

function Payment() {
	const navigate = useNavigate();
	const [{ cart, user }, dispatch] = useStateContext();

	const stripe = useStripe();
	const elements = useElements();

	// Card input states
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState();

	useEffect(() => {
		/* 	
			To get a new client-secret every time the cart updates 
			to update the transaction details and create the new transaction 
		*/
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				// stripe expects amounts in subunits -> paise instead of rupees
				url: `/payment/create?total=${getCartTotal(cart) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [cart]);

	const handlePurchase = async (event) => {
		event.preventDefault();
		if (user) {
			setProcessing(true); // to disable the "buy now" button after one click

			const payload = await stripe
				.confirmCardPayment(clientSecret, {
					payment_method: {
						card: elements.getElement(CardElement),
					},
				})
				.then(({ paymentIntent }) => {
					// payment intent == payment confirmation
					db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
						cart: cart,
						amount: paymentIntent.amount,
						created: paymentIntent.created, // timestamp
					});

					setSucceeded(true);
					setError(null);
					setProcessing(false);

					dispatch({
						type: "EMPTY_CART",
					});

					navigate("/orders", { replace: true });
				});
		} else {
			navigate("/login", { replace: true });
		}
	};

	const handleCardElement = (event) => {
		// listen for changes in the card element
		// display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{cart?.length} items</Link>)
				</h1>

				{/* Payment section - delivery address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user ? `${user?.email}` : "Guest"}</p>
						<p>{user ? "123 Churchgate" : "Address line 1"}</p>
						<p>{user ? "Mumbai, India" : "Address line 2"}</p>
					</div>
				</div>
				{/* Payment section - review items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{cart?.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* Payment section - payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handlePurchase}>
							<CardElement onChange={handleCardElement} />

							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getCartTotal(cart)}
									displayType="text"
									thousandSeparator={true}
									prefix="₹"
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>

							{/* Error message */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
