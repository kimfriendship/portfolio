import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { throttle } from "lodash";
import Header from "./Header";

const HeaderContainer = () => {
  const { pathname: path } = useLocation();
  const history = useHistory();

  const checkScrollPos = (id) => {
    const content = document.getElementById(id);
    const top = content?.getBoundingClientRect().top;
    const height = content?.getBoundingClientRect().height;
    const isContent = top <= 0 && -top < height;
    return isContent;
  };

  const getScrollPos = {
    isHome: checkScrollPos("home"),
    isAbout: checkScrollPos("about"),
    isProject: checkScrollPos("project"),
  };

  const [scrollPos, setScrollPos] = useState({});
  const checkScroll = throttle(() => setScrollPos(getScrollPos), 200);
  window.addEventListener("scroll", checkScroll);

  const isDetail = path === "/project";
  const { isHome, isAbout, isProject } = scrollPos || {};
  // history.replace(`/#${isHome ? "home" : isAbout ? "about" : "project"}`);

  useEffect(() => {
    setScrollPos(getScrollPos);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <Header
      isHome={isHome}
      isAbout={isAbout}
      isProject={isProject}
      isDetail={isDetail}
    />
  );
};

export default HeaderContainer;
