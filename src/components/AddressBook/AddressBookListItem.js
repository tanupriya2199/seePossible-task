import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/styles.css";
import { DELETE_ADDRESS } from "../../gql-operations/mutations/deleteAddress";

const AddressBookListItem = (props) => {
  const address = props.address;
  const [showModal, setshowModal] = useState(false);
  const [deleteCustomerAddress] = useMutation(DELETE_ADDRESS);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const onClickDelete = () => {
    deleteCustomerAddress({
      variables: {
        id: address.id,
      },
      refetchQueries: ["customer"],
    })
      .then((res) => {
        console.log("succefully deleted");
        toggleModal();
      })
      .catch((err) => {
        console.log("error while deleting address", err);
        toggleModal();
      });
  };

  return (
    <div className="item-container background-grey p-3 d-flex justify-content-between mb-3">
      <div>
        <p>Address Id: {address.id}</p>
        <p>
          {address.firstname} {address.lastname}
        </p>
        <p>
          {address.street.length > 0 &&
            address.street.map((data) => <p>{data}</p>)}
        </p>
        <p>{address.city}</p>
        <p>{address.region.region}</p>
        <p>{address.country_code}</p>
        <p>{address.telephone}</p>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <Link
          to={{
            pathname: `/update-address/${address.id}`,
            address: address,
          }}
        >
          <FontAwesomeIcon
            className="cursor-pointer icon-style"
            icon={faPencilAlt}
          />
        </Link>
        <FontAwesomeIcon
          onClick={() => {
            toggleModal();
          }}
          className="cursor-pointer icon-style"
          icon={faTrashAlt}
        />
      </div>
      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete this address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => toggleModal()}>
            Cancel
          </Button>
          <Button
            className="ml-2"
            variant="danger"
            onClick={() => onClickDelete()}
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressBookListItem;
