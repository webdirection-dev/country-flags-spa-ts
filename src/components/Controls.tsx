import React from 'react';
import {useState, useEffect} from "react";
import styled from "styled-components";
import Search from "./Search";
import CustomSelect from "./CustomSelect";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Controls: React.FC = () => {
    const [isSearch, setSearch] = useState('')
    const [isRegion, setRegion] = useState('')

    return(
        <Wrapper>
            <Search
                isSearch={isSearch}
                setSearch={setSearch}
            />

            <CustomSelect
                isRegion={isRegion}
                placeholder='Filter by Region'
                options={options}
                isClearable={true}
                isSearchable={false}
                setRegion={setRegion}
            />
        </Wrapper>
    )
}

export default Controls