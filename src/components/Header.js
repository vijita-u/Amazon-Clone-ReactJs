import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateContext } from "../react-context-api/StateProvider";
import { auth } from "../firebase/firebaseConfig";

function Header() {
	const [{ cart, user }] = useStateContext();

	const signOut = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon logo"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div className="header__option" onClick={signOut}>
						<span className="header__optionLineOne">
							<span>Hello, </span>
							<span className="user__email">{user ? `${user?.email}` : "Guest"}</span>
						</span>
						<span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
