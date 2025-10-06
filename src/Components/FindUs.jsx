import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us</h1>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start font-normal  join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn bg-base-100 justify-start font-normal join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn bg-base-100 justify-start font-normal join-item">
          <FaInstagram></FaInstagram> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
