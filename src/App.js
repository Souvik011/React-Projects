import React,{useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
const [cartVisible, SetCartVisible]=useState(false);

const cartVisibleHandler = () => {
  SetCartVisible(true);
};

const hideCartVisibleHandler = () => {
  SetCartVisible(false);
};


  return (
    <React.Fragment>
      {cartVisible && <Cart onClose={hideCartVisibleHandler} />}
      <Header onShowCart={cartVisibleHandler} />
      <main>
        <Meals /> 
      </main>

    </React.Fragment>
  );
}

export default App;
