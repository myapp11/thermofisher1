import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ChangesThermofisherScientificCorporateLandingPageOp from "./pages/ChangesThermofisherScientificCorporateLandingPageOp";
import ThermofisherScientificCorporateCSR from "./pages/ThermofisherScientificCorporateCSR";
import ThermofisherScientificCorporateLandingPageCFour from "./pages/ThermofisherScientificCorporateLandingPageCFour";
import ChangesThermofisherScientificCorporateAbout from "./pages/ChangesThermofisherScientificCorporateAbout";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "Thermo_homepage", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <ChangesThermofisherScientificCorporateLandingPageOp />,
    },
    {
      path: "thermofisherscientificcorporatecsr",
      element: <ThermofisherScientificCorporateCSR />,
    },
    {
      path: "thermofisherscientificcorporatelandingpagecfour",
      element: <ThermofisherScientificCorporateLandingPageCFour />,
    },
    {
      path: "changesthermofisherscientificcorporateabout",
      element: <ChangesThermofisherScientificCorporateAbout />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
