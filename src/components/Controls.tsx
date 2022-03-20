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

interface IProps {
    handleSearch: (search: string, region: string) => void
}

const Controls: React.FC<IProps> = ({handleSearch}) => {
    const [isSearch, setSearch] = useState('')
    const [isRegion, setRegion] = useState<{value: string, label: string}>({value: '', label: ''})

    useEffect(() => {
        const regionValue = isRegion?.value || ''

        handleSearch(isSearch, regionValue)
        // eslint-disable-next-line
    }, [isSearch, isRegion])

    return(
        <Wrapper>
            <Search
                isSearch={isSearch}
                setSearch={setSearch}
            />

            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable={true}
                isSearchable={false}
                setRegion={setRegion}
                // isRegion={isRegion}
            />
        </Wrapper>
    )
}

export default Controls