import React, { useReducer, useEffect } from "react";
import ProjectCarousel from "../Components/ProjectCarousel";
import { actions } from "../Data/data";

const { GET_IMAGES, MOVE_BEFORE, MOVE_NEXT, END_MOVE } = actions;

const initState = {
  currentIdx: 0,
  fullArray: [],
  renderArray: [],
  count: 0,
  isMovingNext: false,
  isMovingBefore: false,
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
      return {
        ...state,
        currentIdx: nextIdx,
        isMovingNext: true,
        renderArray: [...state.renderArray, state.fullArray[nextIdx]],
      };
    case MOVE_BEFORE:
      const beforeIdx = getBeforeIdx(state.currentIdx);
      return {
        ...state,
        currentIdx: beforeIdx,
        isMovingBefore: true,
        renderArray: [state.fullArray[beforeIdx], ...state.renderArray],
      };
    case END_MOVE:
      return {
        ...state,
        isMovingBefore: false,
        isMovingNext: false,
      };
    default:
      throw new Error("Unhandled Action");
  }
};

const ProjectCarouselContainer = ({ images }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { fullArray, renderArray, currentIdx } = state;

  const getImages = () => dispatch({ type: GET_IMAGES, images });
  const moveNext = () => dispatch({ type: MOVE_NEXT });
  const moveBefore = () => dispatch({ type: MOVE_BEFORE });
  const endMove = () =>
    setTimeout(
      () => dispatch({ type: END_MOVE, newArray: [images[currentIdx]] }),
      300
    );

  useEffect(() => {
    fullArray.length && endMove();
    !fullArray.length && getImages();
  }, [renderArray]);

  return <ProjectCarousel state={state} events={{ moveNext, moveBefore }} />;
};

export default ProjectCarouselContainer;
