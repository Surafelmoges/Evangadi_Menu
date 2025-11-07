import React, { Component } from 'react'

export default class MainCont extends Component {
  render() {
    return (
      <div class="all-container">
        <div class="foods-container">
            <div class="single-food">
          <div class="img">
            <img
              src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
            />
          </div>
          <div class="title-price">
            <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
            <p>$5.99</p>
          </div>
          <div class="food-desc">
            Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice.
          </div>
        </div>
        <div class="single-food">
          <div class="img">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
            />
          </div>
          <div class="title-price">
            <h3>TIBS (ጥብስ)</h3>
            <p>$22.99</p>
          </div>
          <div class="food-desc">
            Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
            one of the most popular dishes among Ethiopians. It comes in a
            variety of forms, varying in type, size or shape of the cuts of meat
            used, and can range from hot to mild or contain...
          </div>
        </div>
        <div class="single-food">
          <div class="img">
            <img
              src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
            />
          </div>
          <div class="title-price">
            <h3>KITFO (ክትፎ)</h3>
            <p>$25.99</p>
          </div>
          <div class="food-desc">
            Made from the leanest meat, kitfo is viewed as a big treat by
            ordinary Ethiopians, while its nutritional powers are also praised.
            Similar to French steak tartare, the meat is minced and warmed in a
            pan with a little butter, mitmita (a stronger version of berbere)...
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}
