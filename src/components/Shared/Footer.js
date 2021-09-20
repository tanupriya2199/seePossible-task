import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-container d-flex">
      <Container className="d-flex justify-content-between align-items-center">
        <div>Cookie Policy - Legal Notice</div>
        <div>Copyright © 2021 Made with &#9829; from seepossible</div>
        <div className="social-handles-container">
          <span className="px-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faPinterestP} />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
