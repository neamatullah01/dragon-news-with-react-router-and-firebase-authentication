import React from "react";
import swimingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import drawingImg from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-4">QZone</h1>
      <div className="space-y-5 flex flex-col items-center">
        <img className="w-full" src={swimingImg} alt="" />
        <img className="w-full" src={classImg} alt="" />
        <img className="w-full" src={drawingImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
