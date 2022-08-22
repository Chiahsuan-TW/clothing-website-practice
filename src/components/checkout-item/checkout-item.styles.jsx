import styled from 'styled-components';

export const ProductTable = styled.tr`
  border-bottom: 1px solid #333;
  
  td {
    text-align: center;
    font-size: 1.5em;
  }
`

export const ProductImg = styled.td`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const DeleteButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-weight: 700;
`
