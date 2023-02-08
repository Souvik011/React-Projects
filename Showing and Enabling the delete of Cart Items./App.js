import React,{useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
const [cartVisible, SetCartVisible]=useState(false);

const cartVisibleHandler = () => {
  SetCartVisible(true);
};

const hideCartVisibleHandler = () => {
  SetCartVisible(false);
};


  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCartVisibleHandler} />}
      <Header onShowCart={cartVisibleHandler} />
      <main>
        <Meals /> 
      </main>

    </CartProvider>
  );
}

export default App;
