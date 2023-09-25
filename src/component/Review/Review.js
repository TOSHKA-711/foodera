import Carousel from "react-bootstrap/Carousel";
import "./Review.css";

function Review() {
  return (
    <div className="car-parent">
    <h2>
    Testimonials
    </h2>
      <div className="container">
        <Carousel className="carousel">
          <Carousel.Item className="item">
            <img
              src="http://demo.tutsflow.com/foodera/images/testimonials/1.jpg"
              alt="First slide"
            />
            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live."
            </p>
            <Carousel.Caption className="caption"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              src="http://demo.tutsflow.com/foodera/images/testimonials/2.jpg"
              alt="Second slide"
            />

            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live far from the countries Vokalia."
            </p>
            <Carousel.Caption className="caption"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              src="https://i.pinimg.com/736x/44/2e/4d/442e4da5b6ba79eb281227a4f5cff838.jpg"
              alt="Third slide"
            />
            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. "
            </p>
            <Carousel.Caption className="caption"></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Review;
