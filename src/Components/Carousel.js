import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel  centerMode={true} autoPlay={false} useKeyboardArrows={true} showThumbs={false} width={"25%"} position={'center'}>
      <div>
        <img src="https://picsum.photos/200" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" />
        <p className="legend">Legend 5</p>
      </div>
  </Carousel>
);

