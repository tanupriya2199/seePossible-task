import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "../../styles/styles.css";

import "../../styles/styles.css";

const AddressBookListItem = () => {
  return (
    <div className="item-container background-grey p-3 d-flex justify-content-between">
      <div>
        <p> Address Id</p>
        <p> First name last name</p>
        <p>Address Line 1</p>
        <p>Address Line 2</p>
        <p>City</p>
        <p>State</p>
        <p>Country</p>
        <p>Telophone</p>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <FontAwesomeIcon className="cursor-pointer" icon={faPencilAlt} />
        <FontAwesomeIcon className="cursor-pointer" icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default AddressBookListItem;
