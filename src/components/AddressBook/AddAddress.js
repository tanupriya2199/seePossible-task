import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const AddAddress = () => {
  const onChangeValues = (e) => {};

  const onClickSaveAddress = () => {};
  return (
    <div className="component-container">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-center pt-4">Add/Edit Address</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center login-container">
          <Col xs={12} sm={5} className="p-4 background-grey">
            <Form>
              <h5>Address Id : #87327683</h5>
              <Row>
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
              </Row>
              <Button
                onClick={(e) => onClickSaveAddress(e)}
                className="w-100 p-2 button"
                color="secondary"
              >
                Save Address
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddAddress;
