import React from "react";
import { CardProps } from "~/domain/entities/card/card.entity";
import "~/style/card.css";

const Card: React.FC<CardProps> = ({ children, className = "py-[12px]" }) => {
  return <div className={`${className} px-[8px] card`}>{children}</div>;
};

export default Card;
