import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ADD_NEW_ADDRESS } from "../../gql-operations/mutations/addNewAddress";

const AddAddress = () => {
  const [addressFormValue, setaddressFormValue] = useState({
    firstname: "",
    lastname: "",
    address: [],
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    telephone: "",
  });

  const [createCustomerAddress] = useMutation(ADD_NEW_ADDRESS);

  const onChangeValues = (e) => {
    setaddressFormValue((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onClickSaveAddress = () => {
    createCustomerAddress({
      variables: {
        input: {
          region: {
            region_id: 7, // adding region statically because we don't have input field for this and its a required parameter
          },
          street: ["123 Main Street"],
          postcode: "77777", // required field but have no forn control to add postal code
          country_code: "US", // required field
          telephone: addressFormValue.telephone,
          city: addressFormValue.city,
          firstname: addressFormValue.firstname,
          lastname: addressFormValue.lastname,
          default_shipping: true,
          default_billing: false,
        },
      },
    })
      .then((res) => {
        console.log("res----", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
                <Col xs={12} md={6}>
                  <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.firstname}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.lastname}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="address1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.address1}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="address2">
                    <Form.Control
                      type="text"
                      value={addressFormValue.address2}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.city}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.state}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      value={addressFormValue.country}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="telephone">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                      type="number"
                      value={addressFormValue.telephone}
                      onChange={(e) => onChangeValues(e)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                onClick={(e) => onClickSaveAddress(e)}
                className="w-100 p-2 button mt-3"
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
