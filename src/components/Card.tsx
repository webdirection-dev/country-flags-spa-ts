import React from 'react';
import styled from "styled-components";
import {ICard, ICardList} from "../types/data";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  
  cursor: pointer;
  overflow: hidden;
`

const Img = styled.img`
  box-shadow: var(--shadow);
  
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`

const Body = styled.div`
  padding: 1rem 1.5rem 2rem;
`

const Title = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin: 0;
`

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`

const CardListItem = styled.li`
  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  line-height: 1.5;

  & > b {
    font-weight: var(--fw-bold);
  }
`

const Card: React.FC<ICard> = (props) => {
    const navigate = useNavigate()
    const {img, name, info} = props

    return(
        <Wrapper onClick={() => navigate(`/country/${name}`, {state: name})}>
            <Img src={img} alt={name}/>
            <Body>
                <Title>{name}</Title>
                <CardList>
                    {
                        info.map((item: ICardList) => {
                            return (
                                <CardListItem key={item.title}>
                                    <b>{item.title}:</b> {item.description}
                                </CardListItem>
                            )
                        })
                    }
                </CardList>
            </Body>
        </Wrapper>
    )
}

export default Card