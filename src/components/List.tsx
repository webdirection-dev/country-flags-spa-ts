import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  width: 100%;
  padding: 2rem 0;
  
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`

const List: React.FC = ({children}) => {

    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default List