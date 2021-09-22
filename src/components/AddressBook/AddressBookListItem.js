import React from "react";
import { useMutation } from "@apollo/client";
import { generatePath } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "../../styles/styles.css";
import { DELETE_ADDRESS } from "../../gql-operations/mutations/deleteAddress";

const AddressBookListItem = (props) => {
  const address = props.address;
  const [deleteCustomerAddress] = useMutation(DELETE_ADDRESS);

  const onClickEdit = () => {};

  const onClickDelete = () => {
    deleteCustomerAddress({
      variables: {
        id: address.id,
      },
      refetchQueries: ["customer"],
    })
      .then((res) => {
        console.log("succefully deleted");
      })
      .catch((err) => {
        console.log("error while deleting address", err);
      });
  };

  return (
    <div className="item-container background-grey p-3 d-flex justify-content-between mb-3">
      <div>
        <p>Address Id: {address.id}</p>
        <p>
          {address.firstname} {address.lastname}
        </p>
        <p>{address.street.length > 0 && address.street.map((data) => data)}</p>
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
            onClick={() => {
              onClickEdit();
            }}
            className="cursor-pointer icon-style"
            icon={faPencilAlt}
          />
        </Link>
        <FontAwesomeIcon
          onClick={() => {
            onClickDelete();
          }}
          className="cursor-pointer icon-style"
          icon={faTrashAlt}
        />
      </div>
    </div>
  );
};

export default AddressBookListItem;
