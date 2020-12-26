import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import List from "./List";

const ListContainer = () => {
  const [viewSize, setViewSize] = useState(window.innerWidth);
  const getViewSize = debounce(() => setViewSize(window.innerWidth), 200);
  window.addEventListener("resize", getViewSize);

  useEffect(() => {
    return () => window.removeEventListener("resize", getViewSize);
  }, []);

  return (
    <>
      <List />
    </>
  );
};

export default ListContainer;
