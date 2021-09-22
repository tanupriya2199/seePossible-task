import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { UPDATE_ADDRESS } from "../../gql-operations/mutations/updateAddress";

const EditAddress = (props) => {
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [updateCustomerAddress] = useMutation(UPDATE_ADDRESS);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      onClickSaveAddress();
    }
  }, [formErrors]);

  useEffect(() => {
    const data = props.location.address;
    console.log("data==", data);
    setaddressFormValue({
      firstname: data.firstname,
      lastname: data.lastname,
      address: [],
      address1: "",
      address2: "",
      city: data.city,
      state: data.state,
      country: data.country_code,
      telephone: data.telephone,
    });
  }, [props]);

  const onChangeValues = (e) => {
    setaddressFormValue((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(addressFormValue));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = "Its a required field";
    }
    if (!values.lastname) {
      errors.lastname = "Its a required field";
    }
    if (!values.city) {
      errors.city = "Its a required field";
    }
    if (!values.state) {
      errors.state = "Its a required field";
    }
    if (!values.telephone) {
      errors.telephone = "Its a required field";
    }
    return errors;
  };

  const onClickSaveAddress = () => {
    updateCustomerAddress({
      variables: {
        id: props.location.address.id,
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
          default_shipping: false,
          default_billing: false,
        },
      },
    })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className="component-container">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-center pt-4">Edit Address</h3>
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
                    {formErrors.firstname && (
                      <Form.Text className="error">
                        {formErrors.firstname}
                      </Form.Text>
                    )}
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
                    {formErrors.lastname && (
                      <Form.Text className="error">
                        {formErrors.lastname}
                      </Form.Text>
                    )}
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
                    {formErrors.city && (
                      <Form.Text className="error">{formErrors.city}</Form.Text>
                    )}
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
                    {formErrors.state && (
                      <Form.Text className="error">
                        {formErrors.state}
                      </Form.Text>
                    )}
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
                    {formErrors.telephone && (
                      <Form.Text className="error">
                        {formErrors.telephone}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Button
                onClick={(e) => handleSubmit(e)}
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

export default EditAddress;
