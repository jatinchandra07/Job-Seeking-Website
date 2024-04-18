import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={ isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Jatin Chandra.</div>
      <div>
        <Link to={"https://www.facebook.com/jatin.chandra.925/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/jatin-chandra-aa0673222/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/jatin_chandra1702/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;