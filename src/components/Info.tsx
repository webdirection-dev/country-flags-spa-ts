import React, {useState, useEffect} from "react";
import axios from "axios";
import {ICountryDetails} from "../types/data";
import styled from "styled-components";
import {filterByCode} from "../config";
import {log} from "util";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  
  @media(min-width: 767px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
  
  @media(min-width: 1024px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Title = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media(min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;
  
  & > b {
    font-weight: var(--fw-bold);
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  
  & > b {
    font-weight: var(--fw-bold);
  }
  
  @media(min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Tag = styled.span`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  padding: 0 1rem;
  line-height: 1.5;
  cursor: pointer;
`

const Info: React.FC<ICountryDetails> = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders,
        navigate
    } = props

    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        if (borders?.length) {
            axios.get(filterByCode(borders)).then(
                ({data}) => setNeighbors(data.map((i: {name: string}) => i.name))
            )
        }
    }, [borders])

    return(
        <Wrapper>
            <Img src={flag} alt={name}/>

            <div>
                <Title>{name}</Title>

                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name: </b>{nativeName}
                        </ListItem>

                        <ListItem>
                            <b>Population: </b>{population}
                        </ListItem>

                        <ListItem>
                            <b>Region: </b>{region}
                        </ListItem>

                        <ListItem>
                            <b>Sub Region: </b>{subregion}
                        </ListItem>

                        <ListItem>
                            <b>Capital: </b>{capital}
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>{topLevelDomain.map(i => <span key={i}>{i}</span>)}
                        </ListItem>

                        <ListItem>
                            <b>Currency: </b>{currencies.map(i => <span key={i.code}>{i.name} </span>)}
                        </ListItem>

                        <ListItem>
                            <b>Languages: </b>{languages.map(i => <span key={i.name}>{i.name}</span>)}
                        </ListItem>
                    </List>
                </ListGroup>

                <Meta>
                    <b>Border Countries</b>

                    {
                        !borders?.length ? (
                            <span>There is no border countries</span>
                        ) : (
                            <TagGroup>
                                {
                                    neighbors.map(i => (
                                        <Tag
                                            key={i}
                                            onClick={() => navigate(`/country/${i}`)}
                                        >{i}</Tag>
                                    ))
                                }
                            </TagGroup>
                        )
                    }
                </Meta>
            </div>
        </Wrapper>
    )
}

export default Info