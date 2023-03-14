import React from "react";
import MenuItem from "./MenuItem";

declare global {
  interface Item {
    id: number;
    title: string;
    img: string;
    desc: string;
    price: number;
  }
}

interface Props {
  items: Item[];
}

const Menu = ({ items }: Props) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
