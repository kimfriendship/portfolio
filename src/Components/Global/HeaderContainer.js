import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { throttle } from "lodash";
import Header from "./Header";

const HeaderContainer = () => {
  const { pathname: path } = useLocation();
  const isDetail = path === "/project";

  const getScrollPos = () => window.scrollY < window.innerHeight;
  const [isHome, setIsHome] = useState(getScrollPos());
  const checkScroll = throttle(() => setIsHome(getScrollPos()), 200);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return <Header isHome={isHome && !isDetail} />;
};

export default HeaderContainer;
