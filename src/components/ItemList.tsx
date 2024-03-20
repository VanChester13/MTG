import React from "react";
import { Info } from "../types/interfaces";
import prof from "../images/womanProfile.png";

import "../styles/itemList.scss";

interface Item {
  item: Info;
}

class ItemList extends React.Component<Item> {
  getItem = () => {
    let fio = "";
    const items = this.props.item.name.split(" ");
    items?.map((item: string, index: number) => {
      if (item.split("")[1] === "." || index === 0) {
        fio += `${item} `;
      } else {
        fio += `${item.substring(0, 1)}.`;
      }
    });
    return fio;
  };

  render() {
    const needItem = this.getItem();

    return (
      <div className="itemList">
        <div className="content">
          <img src={prof} alt="profile" className="imgBlock" />
          <div className="name">
            <strong>ФИО:</strong> {needItem}
          </div>
          <div className="review">{this.props.item.review}</div>
          <strong>{`${this.props.item.date}`}</strong>
        </div>
      </div>
    );
  }
}

export default ItemList;