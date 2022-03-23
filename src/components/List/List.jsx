import React from "react";

import * as sc from "./List.styles";

const List = ({ type, list }) => {
  return (
    <sc.Container>
      <sc.PriceList>
        {list.price.slice(-7).map((item, index) => (
          <sc.Price key={index} type={type}>
            {item}
          </sc.Price>
        ))}
      </sc.PriceList>
      <sc.QuantityList>
        {list.quantity.slice(-7).map((item, index) => (
          <sc.Quantity key={index} type={type}>
            {item}
          </sc.Quantity>
        ))}
      </sc.QuantityList>
    </sc.Container>
  );
};

export default List;
