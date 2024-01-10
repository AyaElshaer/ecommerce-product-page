import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const productImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const productThumbnailImages = [
  "images/image-product-1-thumbnail.jpg",
  "images/image-product-2-thumbnail.jpg",
  "images/image-product-3-thumbnail.jpg",
  "images/image-product-4-thumbnail.jpg",
];

export const Slider = () => {
  const [viewImage, setViewImage] = useState();
  const [openSlider, setOpenSlider] = useState(false);

  const handleViewImage = (image) => {
    setOpenSlider(true);
    setViewImage(image);
  };

  const renderedImages = productThumbnailImages.map((image) => (
    <img
      key={image}
      src={image}
      className={`${viewImage === image && "border-2 border-orange"}
        w-[18.5%] rounded-lg  hover:bg-White hover:opacity-50 cursor-pointer`}
      onClick={() => handleViewImage(image)}
    />
  ));

  const renderedImagesSlider = (
    <div
      className={`${
        openSlider ? "lg:flex" : "lg:hidden"
      } w-full relative lg:absolute lg:inset-0 lg:bg-slide-background`}
    >
      <div className="w-full flex flex-col items-center">
        <div
          className=" hidden w-[34%] lg:flex justify-end pt-8 pb-3"
          onClick={() => setOpenSlider(false)}
        >
          <i className="fa-solid fa-xmark text-White hover:text-orange text-2xl flex justify-center cursor-pointer" />
        </div>

        <Swiper
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {productImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-[37%] hidden lg:flex gap-8 justify-center pt-8">
          {renderedImages}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[40%] lg:pt-[40px] lg:mb-5 gap-6 lg:mt-10">
      <div className="hidden lg:flex">
        <img
          src="images/image-product-1.jpg"
          className="w-[90%] h-auto rounded-lg"
        />
      </div>
      <div className="w-full hidden lg:flex gap-6">
        {renderedImages}
      </div>
      {renderedImagesSlider}
    </div>
  );
};
