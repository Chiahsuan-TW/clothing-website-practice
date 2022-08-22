import styled from 'styled-components';


export const ItemImg = styled.div`
  width: 100px;
  height: 100px;

  img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  
`

export const ItemDescription = styled.div`
  p {
    font-size: 1.2em;
    font-weight: 600;
  }

  span {
    font-size: 1.4em;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;

  & + & {
    margin-top: 20px;
  }
`