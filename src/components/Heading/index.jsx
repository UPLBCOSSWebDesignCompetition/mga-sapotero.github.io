import React from "react";

const sizes = {
  s: "text-base font-semibold",
  md: "text-4xl font-black",
  xs: "text-xs font-semibold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
