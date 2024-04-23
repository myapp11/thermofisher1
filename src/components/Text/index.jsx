import React from "react";

const sizes = {
  "5xl": "text-[38px] font-medium leading-[46px]",
  xs: "text-sm font-normal leading-[17px]",
  lg: "text-xl font-normal leading-6",
  "6xl": "text-[50px] font-medium",
  "7xl": "text-[64px] font-normal leading-[77px]",
  s: "text-base font-medium",
  "2xl": "text-[25px] font-normal leading-[37px]",
  "3xl": "text-3xl font-medium leading-9",
  "4xl": "text-[34px] font-normal leading-[41px]",
  xl: "text-2xl font-normal leading-9",
  md: "text-lg font-normal leading-6",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-helveticaneueltwg ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
