import styled from 'styled-components';
import Button from '../button/button.component'

export const AddToCartButton = styled(Button)`
  position: absolute;
  width: 80%;
  bottom: 20px;
  right: 0;
  left: 0;
  margin: auto;
  display: none;
`

export const ProductImg = styled.div`
  width: 280px;
  height: 350px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    ${AddToCartButton} {
      opacity: 0.85;
      display: block;
    }

    img {
      opacity: 0.75;
    }
  }
`

export const ProductDescription = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 2em;
    font-weight: 500;
  }
`
