import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqB_1AC4wiSC64aeeo3w7Ni1k8uzxU6Bhqtg&usqp=CAU"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41FaKE61LWL._AC_.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Samsung A-50</span>
          <br />
          <span>Price:16000</span>
        </div>

        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
