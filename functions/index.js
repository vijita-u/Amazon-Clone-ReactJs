const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51NSg31SDysQIXqa2uPRZkI6aP53A1YzPBpNYnA81j8XFKd8N0FxABLcqCCTMCEhbUpY2PG6rfvYWzJn5IZEFdO9n00pZKwOBct"
);
// const { onCall } = require("firebase-functions/v2/https");
// const { onDocumentWritten } = require("firebase-functions/v2/firestore");

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Setting up the API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => {
	response.status(200).send("hello world");
});

app.post("/payment/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment request received for amount - ", total);

	// create a paymentIntent
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // in subunits of the currency
		currency: "inr",
	});

	// sending a response
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-using-react-js-c2ec1/us-central1/api
