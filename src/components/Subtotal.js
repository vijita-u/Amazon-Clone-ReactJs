import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateContext } from "../react-context-api/StateProvider";
import { getCartTotal } from "../react-context-api/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
	const navigate = useNavigate();
	const [{ cart }] = useStateContext();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => {
					return (
						<>
							<p>
								Subtotal ({cart?.length} items): <strong>{value}</strong>
							</p>
							<small className="subtotal__gift">
								<input type="checkbox" /> This order contains a gift
							</small>
						</>
					);
				}}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType="text"
				thousandSeparator={true}
				prefix="₹"
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
