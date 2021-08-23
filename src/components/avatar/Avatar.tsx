import React from "react";

import "./Avatar.css";

interface IProps {
  position: string;
  url: string;
  size: number;
}

const Avatar = (props: IProps) => {
  return (
    <div
      className="avatar"
      style={{
        backgroundPosition: props.position,
        backgroundImage: `url(${props.url})`,
        backgroundSize: props.size,
      }}
    />
  );
};

export default Avatar;
