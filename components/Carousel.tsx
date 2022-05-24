import React from "react";

const Carousel = (props) => {
    const {images} = props;
    const [currentImage, setCurrentImage] = React.useState(0);
  

    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  
    const scrollToImage = (i: number) => {
      setCurrentImage(i);
      refs[i].current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    };
  
    const totalImages = images.length;
  
    const nextImage = () => {
      if (currentImage >= totalImages - 1) {
        scrollToImage(0);
      } else {
        scrollToImage(currentImage + 1);
      }
    };
  
    const previousImage = () => {
      if (currentImage === 0) {
        scrollToImage(totalImages - 1);
      } else {
        scrollToImage(currentImage - 1);
      }
    };
  
    const arrowStyle =
      "absolute text-white text-l md:text-2xl z-10 bg-black md:h-10 h-5 md:w-10 w-5 rounded-full opacity-75 flex items-center justify-center";
    const sliderControl = (isLeft) => (
      <button
        type="button"
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
        style={{ top: "40%" }}
      >
        <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
          {isLeft ? "◀" : "▶"}
        </span>
      </button>
    );
  
    return (
      <div className="flex justify-center">
        <div className="flex justify-center  items-center">
          <div className="relative w-full">
            <div className="carousel">
              {sliderControl(true)}
              {images.map((img, i) => (
                <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                  <img src={"/design_assets/images/" + img + ".PNG"} className="w-full object-contain" />
                </div>
              ))}
              {sliderControl(false)}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;