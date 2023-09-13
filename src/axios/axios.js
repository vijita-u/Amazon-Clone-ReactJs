import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-using-react-js-c2ec1.cloudfunctions.net/api", // API (cloud function) url
	// "http://127.0.0.1:5001/clone-using-react-js-c2ec1/us-central1/api"
});

export default instance;
