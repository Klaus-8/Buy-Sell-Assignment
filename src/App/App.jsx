import React from "react";

import { Transactions } from "../containers";
import * as sc from "./App.styles.js";

const App = () => {
  return (
    <sc.Container>
      <Transactions />
    </sc.Container>
  );
};

export default App;
