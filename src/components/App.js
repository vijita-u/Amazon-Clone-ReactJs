import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SubHeader from "./SubHeader";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { useStateContext } from "../react-context-api/StateProvider";
import { auth, db } from "../firebase/firebaseConfig";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

// load stripe.js and create a stripe object
const stripe = loadStripe(
	"pk_test_51NSg31SDysQIXqa2QASSSO79kck5ICKGsvDnD9Hs66NHifAFeyUwXDjGnE1WNtGWxHMSaSwHcY2bN21qhYI4uidY009L5LcrYS"
);

function App() {
	const [{ cart, user }, dispatch] = useStateContext();

	// create a listener to keep track of who is signed in
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user just logged in or has been logged in since before
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Routes>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={stripe}>
									<Payment />
								</Elements>
							</>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
					{/* Default route should always be at the bottom */}
					<Route
						path="/"
						element={
							<>
								<Header />
								<SubHeader />
								<Home />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
