import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitTwitter = () => {
    window.location = "https://twitter.com/TelavaneManas";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dwsd5ortg/image/upload/v1652160828/avatars/jvpihnuol0rnsoejkymb.jpg"
              alt="Founder"
            />
            <Typography>Manas Telavane</Typography>
            <Button onClick={visitTwitter} color="primary">
              Visit Twitter
            </Button>
            
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly" }} className="aboutSectionContainer2">
            <div>🔭 I’m currently working on improving my Backend Development Skills.</div>
            <div>🌱 I’m currently learning Data Structures and Algorithms.</div>
            <div>💻 Certified Doubt Solver at CodeChef.</div>
            <div>4⭐ coder on CodeChef.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
