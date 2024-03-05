import React from "react";
import { useRoutes } from "react-router-dom";
import Main from "pages/Main";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
