import styled from 'styled-components';

export const CheckoutListContainer = styled.div`

  width: fit-content;
  margin: 0 auto;
`

export const CheckoutTable = styled.table`
  border-collapse: collapse;

  thead {
    font-size: 2em;

    th {
      padding: 15px;
    }
  }
`

export const CheckoutTotal = styled.p`
  font-size: 2em;
  text-align-last: right;
  font-weight: 600;
`
