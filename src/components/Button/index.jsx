import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    teal_700: "bg-teal-700 text-white-A700",
    light_blue_800: "bg-light_blue-800",
    black_900_01: "bg-black-900_01",
    blue_A700: "bg-blue-A700",
    gray_900: "bg-gray-900",
    gray_500: "bg-gray-500 text-white-A700",
  },
  outline: {
    gray_400: "border-gray-400 border border-solid",
  },
};
const sizes = {
  xs: "h-[32px] px-3 text-sm",
  sm: "h-[42px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "gray_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "teal_700",
    "light_blue_800",
    "black_900_01",
    "blue_A700",
    "gray_900",
    "gray_500",
    "gray_400",
  ]),
};

export { Button };
