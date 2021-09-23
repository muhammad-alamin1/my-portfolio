import './skillCard.css';
import React from 'react';

export default function SkillCard(props) {
    // console.log(props);
    const {img, title} = props.skill;

    return (
        <div className="" id="card-container1">
            <div className="box1">
                <img src={img} alt="img" className="img-fluid" title={title} />
            </div>
        </div>
    )
}
