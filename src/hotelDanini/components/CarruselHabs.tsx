import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imgs: string[];
  thumbs: boolean;
}

export const CarruselHabs: FC<Props> = ({ imgs = [], thumbs = true }) => {
  return (
    <>
      <Carousel
        ariaLabel="Platillos"
        autoFocus
        axis="horizontal"
        autoPlay
        // centerMode
        // centerSlidePercentage={30}
        // dynamicHeight
        emulateTouch
        infiniteLoop
        interval={3000}
        // labels={{
        //   leftArrow: "previous slide / item",
        //   rightArrow: "next slide / item",
        //   item: "slide item",
        // }}
        // selectedItem={1}
        swipeable
        // width={2000}
        showThumbs={thumbs}
        showStatus={false}
      >
        {imgs.map((im, i) => (
          <div key={i}>
            <img src={im} alt={`Slide ${i}`} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
