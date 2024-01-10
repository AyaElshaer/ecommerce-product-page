import { useState, createContext } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [productCount, setProductCount] = useState(0);

  const addToCart = (count) => {
    setProductCount(count);
  };

  const deleteCartProducts = () => {
    setProductCount(0);
  };

  const values = {
    productCount,
    addToCart,
    deleteCartProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
