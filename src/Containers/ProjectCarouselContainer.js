import React from "react";
import ProjectCarousel from "../Components/ProjectCarousel";

const ProjectCarouselContainer = ({ images }) => {
  const count = images.length;

  return <ProjectCarousel images={images} count={count} />;
};

export default ProjectCarouselContainer;
