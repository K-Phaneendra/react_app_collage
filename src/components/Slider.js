import React, { useState } from "react";
import PropTypes from "prop-types";

// import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const Slider = ({ updateSliderValue, min, max, step, disabled, size }) => {
  const [value, setValue] = useState(0);

  return (
    <RangeSlider
      value={value}
      onChange={(changeEvent) => setValue(changeEvent.target.value)}
      onAfterChange={(c) => updateSliderValue(c.target.value)}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      size={size}
    />
  );
};

Slider.propTypes = {
  updateSliderValue: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
Slider.defaultProps = {
  updateSliderValue: () => {},
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  size: "lg",
};

export default Slider;
