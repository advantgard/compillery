export const ProductItem = ({ title, price, url, action }) => {
  return (
    <React.Fragment>
      <div className="product-item__image-container">
        <div className={`product-item__image`} />
      </div>
      <div className="product-item__tile-container">
        <div className={`product-item__title`}>{title}</div>
      </div>
      <div className="product-item__price-container">
        <div className={`product-item__price`}>{price}</div>
      </div>
      <div className="product-item__action-container">
        <a href={ url } className={`product-item__action`}>
          {action || "Buy"}
        </a>
      </div>
    </React.Fragment>
  );
};
