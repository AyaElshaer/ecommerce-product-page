import { useContext, useState } from "react";
import ProductContext from "../context/products";

// eslint-disable-next-line react/prop-types
const AppBar = ({ showCart }) => {
  const { productCount } = useContext(ProductContext);
  const [openMenu, setOpenMenu] = useState(false);

  const links = ["Collections", "Men", "Women", "About", "Contact"];

  const renderedLinks = links.map((link) => (
    <li
      key={link}
      className=" lg:hover:decoration-orange lg:hover:underline lg:hover:underline-offset-[38px] decoration-2"
    >
      <a href="#">{link}</a>
    </li>
  ));

  return (
    <header className="relative flex items-center justify-between px-4 lg:px-0 pb-4 lg:pb-6 border-b-[1px] border-b-gray">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <img
            src="/images/icon-menu.svg"
            className="flex lg:hidden"
            onClick={() => setOpenMenu(true)}
          />
          <img src="/images/logo.svg" />
        </div>

        <nav
          className={`${openMenu ? "absolute" : "hidden"} lg:relative lg:flex`}
        >
          <img
            src="/public/images/icon-close.svg"
            className="flex lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
          <ul className="flex lg:flex lg:items-center lg:gap-8">
            {renderedLinks}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative cursor-pointer" onClick={showCart}>
          <img src="/images/icon-cart.svg" alt="cart icon" />
          {!!productCount && (
            <div className="absolute -top-2 left-3 w-6 h-4 text-[10px] text-White rounded-xl bg-orange flex items-center justify-center">
              {productCount}
            </div>
          )}
        </div>
        <img
          src="images/image-avatar.png"
          className="w-8 h-8 lg:w-10 lg:h-10 hover:border-orange hover:border-2 rounded-[50%]"
        />
      </div>
    </header>
  );
};

export default AppBar;
