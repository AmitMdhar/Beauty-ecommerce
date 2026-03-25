import React from "react";
import Robot from "@/assets/robot.png";
function Page1(props) {
  return (
    <div className={props.css}>
      <div
        className="border-2
        h-100 w-250 "
      >
     {props.text}
      </div>
      <img src={props.img} alt="Photo" className="border-2 h-100 w-150" />
    </div>
  );
}

export default Page1;
