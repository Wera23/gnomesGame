import React from "react";

const NoData = props => (
  <div className="nodata">
    <div className="nodata__image"></div>
    <p className="nodata__info">{props.text}</p>
  </div>
);

export default NoData;
