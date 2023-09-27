import Carousel from "react-bootstrap/Carousel";
import "./Review.css";
import car1 from "../imgs/ph1.jpg";
import car2 from "../imgs/ph2.jpg";
import car3 from "../imgs/ph3.jpg";

function Review() {
  return (
    <div className="car-parent" id="review">
      <h2>Testimonials</h2>
      <div className="container">
        <Carousel className="carousel">
          <Carousel.Item className="item">
            <img src={car1} alt="First slide" />
            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live."
            </p>
            <Carousel.Caption className="caption"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={car2} alt="Second slide" />

            <p>
              "Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live far from the countries Vokalia."
            </p>
            <Carousel.Caption className="caption"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={car3} alt="Third slide" />
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
