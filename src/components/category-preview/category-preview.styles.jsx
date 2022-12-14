import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
`
export const Title = styled.span`
  font-size: 1.6em;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: fit-content;
  column-gap: 20px;
`
