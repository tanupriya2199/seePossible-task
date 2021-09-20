import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./styles.css";
import "../../styles/styles.css";
import { useMutation } from "@apollo/client";
import { GENERATE_CUSTOM_TOKEN } from "../../gql-operations/mutations/generateCustomerToken";

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });
  const [generateCustomerToken] = useMutation(GENERATE_CUSTOM_TOKEN);

  const onChangeValues = (e) => {
    setSignInState((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const onClickSignIn = (e) => {
    console.log("called", signInState);
    e.preventDefault();
    generateCustomerToken({
      variables: signInState,
    })
      .then((res) => {
        console.log("res==", res);
      })
      .catch((err) => {
        console.log("err==", err);
      });
  };

  return (
    <div className="component-container">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-center pt-4">Customer Login Page</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center login-container">
          <Col xs={12} sm={5} className="p-4 background-grey">
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => onChangeValues(e)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="mb-4"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => onChangeValues(e)}
                />
              </Form.Group>
              <Button
                onClick={(e) => onClickSignIn(e)}
                className="w-100 p-2 button"
                color="secondary"
              >
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end p-0 pb-2">
            <span className="background-grey-200 p-4">
              Google
              <br />
              reCaptcha
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
