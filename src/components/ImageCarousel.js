import React from "react";
import "./ImageCarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel({ images }) {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<div className="imageCarousel">
			<Slider {...settings}>
				{images.map((image) => (
					<div key={image.id}>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default ImageCarousel;
