import React, { useReducer, useEffect } from "react";
import ProjectCarousel from "../Components/ProjectCarousel";
import { actions } from "../Data/data";

const { GET_IMAGES, MOVE_BEFORE, MOVE_NEXT } = actions;

const initState = {
  currentIdx: 0,
  fullArray: [],
  renderArray: [],
  count: 0,
};

const reducer = (state, action) => {
  const getNextIdx = (idx) => (idx + 1 >= state.count ? 0 : idx + 1);
  const getBeforeIdx = (idx) => (idx - 1 < 0 ? state.count - 1 : idx - 1);

  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        fullArray: action.images,
        renderArray: [action.images[0]],
        count: action.images.length,
      };
    case MOVE_NEXT:
      const nextIdx = getNextIdx(state.currentIdx);
      console.log(nextIdx);
      return {
        ...state,
        currentIdx: nextIdx,
        renderArray: [...state.renderArray, state.fullArray[nextIdx]],
      };
    case MOVE_BEFORE:
      const beforeIdx = getBeforeIdx(state.currentIdx);
      console.log(beforeIdx);
      return {
        ...state,
        currentIdx: beforeIdx,
        renderArray: [state.fullArray[beforeIdx], ...state.renderArray],
      };
    default:
      throw new Error("Unhandled Action");
  }
};

const ProjectCarouselContainer = ({ images }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { renderArray } = state;

  const moveNext = () => dispatch({ type: MOVE_NEXT });
  const moveBefore = () => dispatch({ type: MOVE_BEFORE });

  useEffect(() => {
    dispatch({ type: GET_IMAGES, images });
  }, []);

  return (
    <ProjectCarousel images={renderArray} events={{ moveNext, moveBefore }} />
  );
};

export default ProjectCarouselContainer;
