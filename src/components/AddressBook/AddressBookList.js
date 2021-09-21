import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { CUSTOMER } from "../../gql-operations/queries/customer";
import "../../styles/styles.css";
import "./styles.css";
import AddressBookListItem from "./AddressBookListItem";

const AddressBookList = () => {
  const { data, loading, error } = useQuery(CUSTOMER);
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    if (data?.customer.addresses.length > 0) {
      localStorage.setItem(
        "name",
        `${data.customer.firstname} ${data.customer.lastname}`
      );
      setAddressList(data.customer.addresses);
    }
  }, [data]);

  const onClickAddAddress = () => {};

  if (loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } else {
    return (
      <Container className="component-container">
        <Row>
          <Col>
            <h3 className="text-center pt-4">Address Book</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={5}>
            <Form.Group
              controlId="search"
              className="position-relative d-flex align-items-center"
            >
              <FontAwesomeIcon
                className="position-absolute ml-2"
                icon={faSearch}
              />
              <Form.Control
                type="search"
                className="search-box pl-3"
                placeholder="Search address here....."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {addressList.length > 0 &&
            addressList.map((address) => {
              return (
                <Col sm={12} md={3} key={address.id}>
                  <AddressBookListItem address={address} />
                </Col>
              );
            })}
        </Row>
        <Row>
          <Col className="text-center">
            <Link to="/add-address">
              <Button
                onClick={(e) => onClickAddAddress(e)}
                className=" p-2 button my-3"
                color="secondary"
              >
                Add New Address
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AddressBookList;
