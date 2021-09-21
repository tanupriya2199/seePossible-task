import { gql } from "@apollo/client";

export const CUSTOMER = gql`
  {
    customer {
      firstname
      lastname
      suffix
      email
      addresses {
        firstname
        lastname
        street
        city
        region {
          region_code
          region
        }
        postcode
        country_code
        telephone
      }
    }
  }
`;
