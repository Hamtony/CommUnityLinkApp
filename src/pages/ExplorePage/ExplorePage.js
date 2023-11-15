import React from "react";
import "./style.css";
import Navbar from "../../components/shared/Navbar";

export const ExplorePage = () => {
  return (
    <body>
      <div className="page2">
        <Navbar/>
        <div className="section">
          <div className="container">
            <div className="text-wrapper">Explore Local Businesses</div>
            <p className="description">Discover the most popular products and services in your community.</p>
          </div>
          <img className="vector" alt="Vector" src="img/vector-200.svg" />
        </div>
        <div className="div">
          <div className="container">
            <div className="title-2">Promoted Products</div>
            <div className="list">
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                    <div className="tag">
                      <div className="text">New Arrival</div>
                    </div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 1</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons.svg" />
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 2</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-4.svg" />
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 3</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-5.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Vector" src="img/image.svg" />
        </div>
        <div className="div">
          <div className="container">
            <div className="title-2">Popular Products</div>
            <div className="list">
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                    <div className="tag">
                      <div className="text">New Arrival</div>
                    </div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 1</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-6.svg" />
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 2</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-7.svg" />
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <div className="image">
                    <div className="title-3">Product Image</div>
                  </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Product 3</div>
                  <div className="subtitle">Product details</div>
                  <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-8.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Vector" src="img/vector-200-3.svg" />
        </div>
        <div className="div">
          <div className="title-wrapper">
            <div className="title-5">Customer Reviews</div>
          </div>
          <div className="list-2">
            <div className="card-2">
              <div className="user">
                <div className="avatar">
                  <div className="avatar-2" />
                  <div className="frame">
                    <div className="title-6">User 1</div>
                  </div>
                </div>
                <img className="frame-2" alt="Frame" src="img/frame-427318817.svg" />
              </div>
              <div className="title-7">Great experience!</div>
              <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-2.svg" />
            </div>
            <div className="card-2">
              <div className="user">
                <div className="avatar">
                  <div className="avatar-2" />
                  <div className="frame">
                    <div className="title-6">User 2</div>
                  </div>
                </div>
                <img className="frame-2" alt="Frame" src="img/frame-427318817-2.svg" />
              </div>
              <div className="title-7">Amazing service.</div>
              <img className="icon-buttons" alt="Icon buttons" src="img/icon-buttons-3.svg" />
            </div>
          </div>
          <img className="vector-2" alt="Vector" src="img/vector-200-2.svg" />
        </div>
        <div className="container-wrapper">
          <div className="div-wrapper">
            <p className="p">© 2021 CommUnityLink. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
  );
};
