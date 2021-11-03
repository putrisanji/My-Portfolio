import React from "react";
import {Card} from "react-bootstrap"

import ProfileFoto from "../../Asset/Images/bb_2.png"
import "./Profile.css";

function Profile() {
  return (
    <div className="outer-profile">
      <div className="container-left" >
        <Card.Title style={{color: "white"}}>Lorem ipsum</Card.Title>
        <Card.Text style={{color: "white"}}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </Card.Text>
      </div>
      <div className="image-profile">
        <Card.Img src={ProfileFoto} style={{width:"20vw", height:"50vh"}}></Card.Img>
      </div>
      <div className="container-right" >
        <Card.Title style={{color: "white"}}>Lorem ipsum</Card.Title>
        <Card.Text style={{color: "white"}}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </Card.Text>
      </div>
    </div>
  );
}

export default Profile;
