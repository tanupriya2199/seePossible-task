import { gql } from "@apollo/client";

export const UPDATE_ADDRESS = gql`
  mutation updateCustomerAddress($id: Int!, $input: CustomerAddressInput) {
    updateCustomerAddress(id: $id, input: $input) {
      id
      city
      postcode
    }
  }
`;
