import React from "react";
import SliderRoot from "./root";
import SliderTrack from "./track";
import SliderRange from "./range";
import SliderThumb from "./thumb";

export interface SliderProps {
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: Array<number>;
  onChange?(value: number[]): void;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "vertical" | "horizontal";
  dir?: "ltr" | "rtl";
  disabled?: boolean;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      style,
      defaultValue = [0],
      onChange,
      min,
      max,
      step = 1,
      orientation = "horizontal",
      dir = "ltr",
      disabled,
    },
    ref
  ) => {
    const renderThumb = () => {
      const list = [];

      for (let i = 0; i < defaultValue?.length; i += 1) {
        list.push(<SliderThumb key={i} />);
      }
      return list;
    };

    return (
      <SliderRoot
        className={className}
        style={style}
        ref={ref}
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        orientation={orientation}
        dir={dir}
        onValueChange={onChange}
        disabled={disabled}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {renderThumb()}
      </SliderRoot>
    );
  }
);

export default Slider;
