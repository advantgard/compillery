export const ProductItem = ({ title, price, url, action }) => {
  return (
    <React.Fragment>
      <div className="u-order--0 col-sm--4">
        <div className={`image-container`} />
      </div>
      <div className="u-order--2 col-sm--4 u-my--2">
        <div className={`column-title`}>{title}</div>
      </div>
      <div className="u-order--4 col-sm--4 u-my--1">
        <div className={`column-price`}>{price}</div>
      </div>
      <div className="u-order--6 col-sm--4 u-my--1">
        <a href={ url } className={`button-cta`}>
          {action || "Buy"}
        </a>
      </div>
    </React.Fragment>
  );
};
