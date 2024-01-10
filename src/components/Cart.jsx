import { useContext } from "react";
import ProductContext from "../context/products";

const Cart = () => {
  const { productCount, deleteCartProducts } = useContext(ProductContext);
  const total = productCount * 125;

  return (
    <>
      <div className="absolute top-[74px] left-0 lg:left-[68%] z-[80] rounded-lg shadow-xl min-h-[200px] ml-4 w-[92%] lg:w-[350px] bg-White ">
        <div className="w-full p-5">
          <p className="text-black font-bold">Cart</p>
        </div>

        <hr className="text-gray" />

        {productCount === 0 ? (
          <div className=" w-full h-full flex items-center justify-center mt-14">
            <p className="text-sm text-dark-grayish-blue">Your cart is empty</p>
          </div>
        ) : (
          <div className="p-5 pb-7">
            <div className="flex items-center justify-between mb-6 ">
              <div className="flex items-center gap-3">
                <img
                  src="images/image-product-1-thumbnail.jpg"
                  className="w-14 rounded"
                />
                <div className="text-sm text-dark-grayish-blue">
                  <p className=" mb-1"> Fall Limited Edition Sneakers</p>
                  <div className="flex items-center gap-2">
                    <p>$125.00 x {productCount}</p>
                    <p className="text-sm font-bold text-black inline">{`$ ${total}.00`}</p>
                  </div>
                </div>
              </div>
              <div onClick={deleteCartProducts} className="cursor-pointer">
                <img src="images/icon-delete.svg" />
              </div>
            </div>

            <button className="w-full h-12 rounded-lg py-[12px] px-10 bg-orange flex items-center gap-2 text-White justify-center text-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
