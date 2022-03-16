import React from 'react';
import styled from "styled-components";
import {Container} from "./Container";

const Wrapper = styled.main`
  padding: 2rem 1rem;
  
  @media(min-width: 767px) {
    padding: 4rem 1rem;
  }
  
  @media(min-width: 1149px) {
    padding: 4rem 0;
  }
`

const Main: React.FC = ({children}) => {

    return(
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Main