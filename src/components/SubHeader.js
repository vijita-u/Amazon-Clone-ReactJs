import React from "react";
import "./SubHeader.scss";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

function SubHeader() {
	return (
		<div className="subHeader">
			<div className="subHeader__left">
				<span className="subHeader__optionLineOne">Deliver to</span>
				<span className="subHeader__optionLineTwo">
					<PlaceOutlinedIcon fontSize="small" />
					<span className="subHeader__lineTwo">Select your address</span>
				</span>
			</div>

			<div className="subHeader__right">
				<img
					className="subHeader__image"
					alt="Join Prime now"
					src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SatyapremKiKatha/400x39-SWM_NP._CB596724576_.jpg"
				/>
			</div>
		</div>
	);
}

export default SubHeader;
