import React from "react";

export const ProductSlide = ({ title, description, category, active }) => (
  <div className={`product-slide ${active ? "animation-puff-in" : "u-hidden"}`}>
    <div className="product-slide__content">
      <div className="product-slide__image">
        <button className="product-slide__carousel-button">
          <span className="product-slide__prev-icon">{""}</span>
        </button>
        <button className="product-slide__carousel-button">
          <span className="product-slide__next-icon">{""}</span>
        </button>
      </div>
    </div>
    <div className="product-slide__content u-flex-center--y">
      {category ? <div className="slide-category u-my--2">{category}</div> : ""}
      <div className="slide-title">{title}</div>
      <p className="slide-description">{description}</p>
      <div className="input-select">
        <span className="label">Size:</span>
        <select className="input-select__input">
          <option value="1">Small</option>
          <option value="2">Medium</option>
        </select>
      </div>
      <div className="grid u-my--3">
        <div className="col-xs--1 col-md--2 quantity-input">
          <span>QTY</span>
          <button className="button-quantity">
            <span className="icon-minus--grey">{""}</span>
          </button>
          <div className="input-text">
            <input type="text" className="input-text__input" />
          </div>
          <button className="button-quantity">
            <span className="icon-plus--grey">{""}</span>
          </button>
        </div>
        <div className="col-xs--1 col-md--2">
          <a href="#" className="button-cta">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
);
