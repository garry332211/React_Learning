import React from "react";
import south from "./Images/South.png";
import north from "./Images/North.png";
import "./Hemishpere.css";

const hemisphereConfig = {
  Northern: {
    text: "You Are Located In Northren Hemishphere",
    picture: north,
  },
  Southern: {
    text: "You Are Located In Southern Hemishphere",
    picture: south,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere} >
    <div className='ui raised text container segment'>
        <div className='image'>
            <img src={picture} alt="hemisphere"/>
        </div>
        <div className='ui teal bottom attached label'>
            <h1>{ text }</h1>
        </div>
    </div>
</div>
  );
};

export default HemisphereDisplay;
