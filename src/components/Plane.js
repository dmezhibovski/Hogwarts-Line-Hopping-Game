import React from "react";
//import Image from 'react-bootstrap/Image'

export default function Plane() {
  return (
    <div>
      <div className="position-relative">
        <Image
          src={require("./../images/airPlane.jpg")}
          className="invisible"
        ></Image>
      </div>
    </div>
  );
}
