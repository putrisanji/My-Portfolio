import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import Profil from "./myProfile";
import Education from "./education";
import Course from "./course";
import "./Profile.css";

function Profile() {
  const [showProfil, setShowProfil] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  const handleProfile = () => {
    // setShowInitial(false);
    setShowProfil(true);
    setShowCourse(false);
    setShowEducation(false);
  };
  const handleEducation = () => {
    // setShowInitial(false);
    setShowProfil(false);
    setShowCourse(false);
    setShowEducation(true);
    console.log(1);
  };
  const handleExperiance = () => {
    // setShowInitial(false);
    setShowProfil(false);
    setShowEducation(false);
    setShowCourse(true);
    console.log(2);
  };

  return (
    <div id="profile" className="outer-profile">
      <div className="profil">
        <div className="navigation">
          <Nav>
            <Nav.Item>
              <Nav.Link onClick={handleProfile}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleEducation}>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleExperiance}>Course</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="description">
          {showProfil ? (
            <div>
              <Profil/>
            </div>
          ) : showEducation ? (
            <div>
              <Education/>
            </div>
          ) : (
            showCourse && (
              <div>
                <Course/>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
