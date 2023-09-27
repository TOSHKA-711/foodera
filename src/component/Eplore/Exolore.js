import React from "react";
import "./Eplore.css";
import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1 from "../imgs/01.jpg"
import card2 from "../imgs/02.jpg"
import card3 from "../imgs/03.jpg"
const Explore = () => {
  return (
    <Fragment>
      <div className="container explore" id="explore-food">
        <div className="text">
          <h3>Explore Our Foods</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="cards">
          <Card style={{ width: "22rem"} } className="card mb-4 border-0">
            <Card.Img className="img"
              variant="top"
              src={card1}
            />
            <Card.Body>
              <Card.Title>
                <h4>Rainbow Vegetable Sandwich</h4>
                <p class="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
              </Card.Title>
              <Card.Text >
                <div class="price-wrap h3">
                  <span class="price-new">$10.50</span>{" "}
                  <del class="price-old">$11.70</del>
                </div>
              </Card.Text>
              <Button >Order Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem"} } className="card mb-4 border-0">
            <Card.Img className="img"
              variant="top"
              src={card2}
            />
            <Card.Body>
              <Card.Title>
                <h4>Vegetarian Burger</h4>
                <p class="desc">Time: 30 - 45 Minutes | Serves: 1</p>
              </Card.Title>
              <Card.Text>
                <div class="price-wrap h3">
                  <span class="price-new">$9.20</span>{" "}
                  <del class="price-old">$10.50</del>
                </div>
              </Card.Text>
              <Button >Order Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem"} } className="card mb-4 border-0">
            <Card.Img className="img"
              variant="top"
              src={card3}
            />
            <Card.Body>
              <Card.Title>
                <h4>Raspberry Stuffed French Toast</h4>
                <p class="desc"> Time: 10 - 15 Minutes | Serves: 1 </p>
              </Card.Title>
              <Card.Text>
                <div class="price-wrap h3">
                  <span class="price-new">$12.50</span>{" "}
                  <del class="price-old"> $13.20</del>
                </div>
              </Card.Text>
              <Button >Order Now</Button>
            </Card.Body>
          </Card>
         
        </div>
      </div>
    </Fragment>
  );
};

export default Explore;
