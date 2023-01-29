
import React, { Component } from 'react';
import Card from './Card';

class ParentComponent extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          title="Black Denim Jacket Fancy  "
          img="card1-img.jpg"
          rate="$5.8"
          items="BUY +"
          sizes=" S M L  "

        />
        <Card
          title="Mumtaz Arts Muraad"
          img="card2-img.jpg"
          rate="$4.8"
          items="BUY +"
          sizes=" S M L "
        />
        <Card
          title="Black and White Round Neck Half Sleeve T-Shirt for Men"
          img="card3-img.jpg"
          rate="$3.9"
          items="BUY +"
          sizes=" S M L "

        />
        <Card
          title="NanoEdge Womens'sGirls Cotton Slim Fit Joggers "
          img="card4-img.jpg"
          rate="$4.5"
          items="BUY +"
          sizes=" S M L "

        />

      </div>


    );

  }
}

export default ParentComponent;
