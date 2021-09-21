import { gql } from "@apollo/client";

export const DELETE_ADDRESS = gql`
  mutation deleteCustomerAddress($id: Int!) {
    deleteCustomerAddress(id: $id)
  }
`;
