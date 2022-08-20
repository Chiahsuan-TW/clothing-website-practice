import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`


export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  * + *:not(.item-count) {
    margin-left: 30px;
  }
`

export const NavLink = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  padding: 5px;
`

