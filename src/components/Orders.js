import React, { useEffect, useState } from "react";
import "./Orders.scss";
import { useStateContext } from "../react-context-api/StateProvider";
import { db } from "../firebase/firebaseConfig";
import Order from "./Order";

function Orders() {
	const [{ user }] = useStateContext();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__container">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
