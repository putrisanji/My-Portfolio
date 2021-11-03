import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";

import "./Contact.css";

const socialMedia = [
  {
    id: "1",
    name: "Facebook",
    icont: <BsFacebook style={{height:"3rem", width:"3rem"}}/>,
    link: "https://www.facebook.com/profile.php?id=100005650517845",
  },
  {
    id: "2",
    name: "Instagram",
    icont: <BsInstagram style={{height:"3rem", width:"3rem"}}/>,
    link: "https://www.instagram.com/sanjiwanidewi24/",
  },
  {
    id: "3",
    name: "Linkedin",
    icont: <BsLinkedin style={{height:"3rem", width:"3rem"}}/>,
    link: "https://www.linkedin.com/in/putri-sanjiwani-dewi",
  },
  {
    id: "4",
    name: "Email",
    icont: <BsEnvelope style={{height:"3rem", width:"3rem"}}/>,
    link: "mailto: putrisanjiwanidewi@gmail.com",
  },
];

function Contact() {
  return (
    <div className="outer-contact">
      {socialMedia.map((icon) => {
        return (
          <div className="mySosmed">
            <a href={icon.link}>{icon.icont}</a>
            <p style={{ color: "black" }}>{icon.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
