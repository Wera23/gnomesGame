import React from "react";

interface IProps {
  text: string
}

const NoData = (props: IProps) => (
  <div className="nodata">
    <div className="nodata__image"></div>
    <p className="nodata__info">{props.text}</p>
  </div>
);

export default NoData;
