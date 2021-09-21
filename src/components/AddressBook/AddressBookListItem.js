import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import "../../styles/styles.css";

import "../../styles/styles.css";

const AddressBookListItem = (props) => {
  const address = props.address;
  return (
    <div className="item-container background-grey p-3 d-flex justify-content-between mb-3">
      <div>
        <p>{uuidv4().slice(0, 13)}</p>
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
