import { useQuery } from "@apollo/client";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { CUSTOMER } from "../../gql-operations/queries/customer";
import "./styles.css";
import "../../styles/styles.css";
import AddressBookListItem from "./AddressBookListItem";

const AddressBookList = () => {
  const { data, loading, error } = useQuery(CUSTOMER);
  console.log("data==", data, "err===", error);

  const onChangeValues = (e) => {};

  const onClickAddAddress = () => {};

  return (
    <Container className="component-container">
      <Row>
        <Col>
          <h3 className="text-center pt-4">Address Book</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={5}>
          <Form.Group controlId="search" className="right-inner-addon">
            <FontAwesomeIcon icon={faSearch} />
            <Form.Control
              type="search"
              className="search-box pl-3"
              placeholder="Search address here....."
              onChange={(e) => onChangeValues(e)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddressBookListItem />
        </Col>
        <Col>
          <AddressBookListItem />
        </Col>
        <Col>
          <AddressBookListItem />
        </Col>
        <Col>
          <AddressBookListItem />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            onClick={(e) => onClickAddAddress(e)}
            className=" p-2 button my-3"
            color="secondary"
          >
            Add New Address
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressBookList;
