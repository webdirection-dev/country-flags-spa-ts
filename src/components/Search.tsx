import React from 'react';
import {ISearch} from "../types/data";
import styled from "styled-components";
import {IoSearch} from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  
  @media(min-width: 767px) {
    width: 296px;
    margin-bottom: 0;
  }
`

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  color: var(--color-text);
  background-color: var(--colors-ui-base);

  margin-left: 2rem;
  border: none;
  outline: none;
`

const Search: React.FC<ISearch> = ({isSearch, setSearch}) => {
    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setSearch(e.target.value)
    }

    return(
        <InputContainer>
            <IoSearch />

            <Input
                value={isSearch}
                onChange={(e) => handleChangeInput(e)}
            />
        </InputContainer>
    )
}

export default Search