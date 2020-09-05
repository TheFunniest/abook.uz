import React from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "./laptop";
import Mobile from "./mobile";

const Book = () => {
  const isDesktop = useMediaQuery({ minWidth: 786 });
  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Book;
