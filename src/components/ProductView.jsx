import { useContext, useState } from "react";
import ProductContext from "../context/products";

const ProductView = () => {
  const { addToCart } = useContext(ProductContext);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count !== 0) setCount(count - 1);
  };

  return (
    <div className="flex justify-center flex-col w-[95%] lg:w-[40%] px-4 lg:px-0 lg:mt-10">
      <p className="text-orange text-sm tracking-widest uppercase mb-4 font-bold">
        Sneaker Company
      </p>

      <h1 className="text-black text-3xl lg:text-4xl mb-5 lg:mb-8 font-bold w-full lg:w-[80%]">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-sm text-dark-grayish-blue mb-6 leading-6 w-[98%] lg:w-[90%]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex lg:gap-1 justify-between lg:flex-col flex-row items-center mb-6 lg:mb-8 lg:items-start">
        <div className="flex items-center gap-4 ">
          <p className="text-black text-2xl lg:text-xl font-bold">$125.00</p>
          <div className="py-[2px] px-[8px] text-sm bg-pale-orange font-bold text-orange rounded">
            50%
          </div>
        </div>

        <p className=" text-sm text-grayish-blue line-through ">$250.00</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4">
        <div className="flex items-center w-full  lg:w-36 bg-light-grayish-blue rounded-lg">
          <button
            className="h-full w-2/5 px-4 py-[12px] flex justify-start hover:opacity-75"
            onClick={incrementCount}
          >
            <img src="/images/icon-plus.svg" />
          </button>
          <p className="text-black font-bold w-1/5 flex justify-center px-4 py-[12px]">
            {count}
          </p>
          <button
            className="h-full w-2/5 py-[12px] flex justify-end px-4 hover:opacity-75"
            onClick={decrementCount}
          >
            <img src="/images/icon-minus.svg" />
          </button>
        </div>

        <button
          onClick={() => addToCart(count)}
          className="w-full lg:w-[250px] h-12 mb-12 lg:mb-0 rounded-lg py-[12px] lg:px-10 bg-orange flex items-center justify-center gap-2 shadow-2xl hover:opacity-75"
        >
          <i className="fa-solid fa-cart-shopping text-White"></i>
          <p className=" text-White text-sm">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export { ProductView };
