import React from "react";
import { stageStyles, wrapperStyles } from "../utils";

const Wrap = wrapperStyles("div");
const Stage = stageStyles("ul");

export interface CarouselState {
  translate3d;
  clones;
  transition;
  canUseDom;
}

const Carousel: React.FC = () => {
  return (
    <div>
      <div>
        <Wrap>
          <Stage>{clones.map(renderStageItem)}</Stage>
        </Wrap>
      </div>
    </div>
  );
};

export default Carousel;
