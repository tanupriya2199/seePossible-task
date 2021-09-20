import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container d-flex">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="logo-coniatiner">Company logo</div>
        <div className="connection-status-container d-flex align-items-baseline">
          <p className="py-3 pl-2">
            Connection lost. Reconnecting in 5 seconds...{" "}
            <span className="p-3">Reconnect</span>
          </p>
        </div>
        <div className="action-buttons ">
          <Link className="px-2" to="/sign-in">
            <span>Sign in</span>
          </Link>
          <Link className="px-2" to="/sign-up">
            <span>Sign up</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
