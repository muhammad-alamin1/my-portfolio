import React from "react";
import "./skillCard.css";

export default function SkillCard(props) {
  const { img, title } = props.skill;

  return (
    <div className="" id="card-container1">
      <div className="box1">
        <img src={img} alt="img" className="img-fluid" title={title} />
      </div>
    </div>
  );
}
