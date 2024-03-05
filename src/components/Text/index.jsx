import React from "react";

const sizes = {
  xs: "text-base font-normal",
  s: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
