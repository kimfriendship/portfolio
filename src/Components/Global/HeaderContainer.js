import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { throttle } from "lodash";
import Header from "./Header";

const HeaderContainer = () => {
  const location = useLocation();
  const { pathname: path } = location;
  const isDetail = path === "/project";

  const turningPoint = window.innerHeight - 70;
  const checkHome = !isDetail && window.scrollY < turningPoint;
  const [isHome, setIsHome] = useState(checkHome);
  const checkScroll = throttle(
    () => setIsHome(!isDetail && window.scrollY < turningPoint),
    200
  );

  window.addEventListener("scroll", checkScroll);

  useEffect(() => {
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return <Header isHome={isHome} isDetail={isDetail} />;
};

export default HeaderContainer;
