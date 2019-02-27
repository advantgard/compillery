import React from "react";

export const Tile = ({ id, label, active, onClick }) => (
  <div className="tile__container">
    <a
      href="javascript:void(0)"
      className={`tile${active ? " tile--selected" : ""}`}
      onClick={id => onClick(id)}
    >
      <span className={`tile__icon${active ? " tile__icon--selected" : ""}`} />
      <span className={`tile__label${active ? " tile__label--selected" : ""}`}>
        {label}
      </span>
    </a>
  </div>
);
