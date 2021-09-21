import { useMutation } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { LOGOUT_USER } from "../../gql-operations/mutations/logoutUser";
import "../../styles/styles.css";

const Header = () => {
  const history = useHistory();
  const [revokeCustomerToken] = useMutation(LOGOUT_USER);

  const onClickLogout = () => {
    revokeCustomerToken()
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        history.push("/");
      })
      .catch((err) => {
        console.log("err==", err);
      });
  };

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
          {localStorage.getItem("token") ? (
            <>
              <span>Welcome, {localStorage.getItem("name")}</span>

              <span
                className="px-3 cursor-pointer"
                onClick={() => onClickLogout()}
              >
                Log Out
              </span>
            </>
          ) : (
            <>
              <Link className="px-2" to="/sign-in">
                <span>Sign in</span>
              </Link>
              <Link className="px-2" to="/sign-up">
                <span>Sign up</span>
              </Link>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
