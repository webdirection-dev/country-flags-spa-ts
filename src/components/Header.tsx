import {useState, useEffect, MouseEventHandler} from "react";
import styled from "styled-components";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {Container} from "./Container";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  
  @media(min-width: 1149px) {
    padding: 2rem 0;
  }
`

const Title = styled.a.attrs({
    href: '/'
})`
  color: var(--colors-text);
  flex-shrink: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  flex-shrink: var(--fs-sm);
  //font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;
`

const Header = () => {
    const [isTheme, setTheme] = useState('light')

    const toggleTheme: MouseEventHandler<HTMLDivElement> = (): void => {
        setTheme(isTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', isTheme)
    }, [isTheme])

    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {
                            isTheme === 'light' ? <IoMoonOutline size='14px'/> : <IoMoon size='14px'/>
                        }
                        <span style={{marginLeft: '0.75rem'}}>{isTheme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header