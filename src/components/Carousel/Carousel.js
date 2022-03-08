import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../Card/Card";
import image from "../../assets/images/Rectangle7.jpg";
import "./Carousel.css";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";

const CarouselComponent = ({ projects = [], responsive, className }) => {
  const history = useHistory();

  return (
    <Carousel responsive={responsive} className={className}>
      {projects.length > 0 &&
        projects.map((project) => {
          return (
            <Card
              key={project._id}
              project={project}
              className="card"
              addbtn={true}
              image={image}
              onClick={() => history.push(`/app/view-project/${project._id}`)}
            />
          );
        })}
    </Carousel>
  );
};

export default CarouselComponent;
