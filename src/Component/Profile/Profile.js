import React, {useState} from "react";
import { Nav } from "react-bootstrap";

import ProfileFoto from "../../Asset/Images/bb_2.png";
import "./Profile.css";

function Profile() {
  const [showInitial, setShowInitial]=useState(true)
  const [showProfil, setShowProfil]=useState(false)
  const [showEducation, setShowEducation]= useState(false)
  const [showExperiance, setShowExperiance] = useState(false)

  const handleProfile = ()=>{
    setShowInitial(false)
    setShowProfil(true)
    setShowExperiance(false)
    setShowEducation(false)
  }
  const handleEducation = ()=>{
    setShowInitial(false)
    setShowProfil(false)
    setShowExperiance(false)
    setShowEducation(true)
    console.log(1)
  }
  const handleExperiance=()=>{
    setShowInitial(false)
    setShowProfil(false)
    setShowEducation(false)
    setShowExperiance(true)
    console.log(2)
  }

  return (
    <div id="profile" className="outer-profile">
      <div className="container">
        <div className="navigation">
          <Nav>
            <Nav.Item>
              <Nav.Link onClick={handleProfile}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleEducation}>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleExperiance}>Experiance</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="description">
          {
            showInitial ? (
              <div>
                <p>hallo wold</p>
              </div>
            ): 
            showProfil ? (
              <div>
                <p>hallo profile</p>
              </div>
            ):
            showEducation ? (
              <div>
              <p>hallo Edu</p>
            </div>
            ): showExperiance && (
              <div>
              <p>hallo Experiance</p>
              </div>
            )
          }
        </div>
        </div>
    </div>
  );
}

export default Profile;
