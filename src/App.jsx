import { useState } from "react";
import Cart from "./components/Cart";
import { ProductView } from "./components/ProductView";
import AppBar from "./components/AppBar";
import { Slider } from "./components/Slider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const showCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="relative pt-4 lg:px-40 lg:pt-6 pb-8">
      <AppBar showCart={showCart} />
      <main className="w-full flex items-center justify-center flex-col lg:flex-row  gap-5 lg:gap-16 ">
        <Slider />
        <ProductView />
      </main>
      {openCart && <Cart />}
    </div>
  );
}

export default App;
