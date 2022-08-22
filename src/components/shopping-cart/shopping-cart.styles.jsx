import styled from 'styled-components';


import { ReactComponent as CartSvg} from '../../assets/shopping-bag.svg';

export const CartIcon = styled(CartSvg)`
  width: 35px;
  height: 35px;
`

export const ShoppingCartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  left: -10px;
  bottom: 6px;
`
