import { gql } from "@apollo/client";

export const ADD_NEW_ADDRESS = gql`
  mutation {
    createCustomerAddress(input: CustomerAddressInput) {
      id
      region {
        region
        region_code
      }
      country_code
      street
      telephone
      postcode
      city
      default_shipping
      default_billing
    }
  }
`;
