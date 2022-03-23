import React, { useState } from "react";

import { Button, Divider, List } from "../../components";
import * as sc from "./Transactions.styles";

const Transactions = () => {
  const [buy, sell] = ["Buy", "Sell"];

  const [buyList, setBuyList] = useState({
    price: [0, 0, 0, 0, 0, 0, 0],
    quantity: [0, 0, 0, 0, 0, 0, 0],
  });

  const [sellList, setSellList] = useState({
    price: [0, 0, 0, 0, 0, 0, 0],
    quantity: [0, 0, 0, 0, 0, 0, 0],
  });

  const clickHandler = (type) => {
    const randomPrice = Math.floor(Math.random() * 10 + 1);
    const randomQuantity = Math.floor(Math.random() * 1000 + 35000);

    if (type === buy) {
      setBuyList((prevState) => ({
        ...prevState,
        price: [...buyList.price, randomPrice],
        quantity: [...buyList.quantity, randomQuantity],
      }));
    } else {
      setSellList((prevState) => ({
        ...prevState,
        price: [...sellList.price, randomPrice],
        quantity: [...sellList.quantity, randomQuantity],
      }));
    }
  };

  return (
    <sc.Container>
      <sc.ButtonContainer>
        <Button label={buy} onClicked={clickHandler} />
        <Button label={sell} onClicked={clickHandler} />
      </sc.ButtonContainer>
      <sc.ListContainer>
        <List type={buy} list={buyList} />
        <Divider />
        <List type={sell} list={sellList} />
      </sc.ListContainer>
    </sc.Container>
  );
};

export default Transactions;
