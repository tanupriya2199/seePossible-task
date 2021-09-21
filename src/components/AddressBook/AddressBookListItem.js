import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "../../styles/styles.css";

import "../../styles/styles.css";

const AddressBookListItem = (props) => {
  const address = props.address;
  return (
    <div className="item-container background-grey p-3 d-flex justify-content-between mb-3">
      <div>
        <p> Address Id</p>
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
        <FontAwesomeIcon className="cursor-pointer" icon={faPencilAlt} />
        <FontAwesomeIcon className="cursor-pointer" icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default AddressBookListItem;
