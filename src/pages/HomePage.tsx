import React, {useState, useEffect} from 'react';
import axios from "axios";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {ALL_COUNTRIES} from "../config";
import preloader from '../img/preloader.gif'

import {ICountry, ICountries, IPreloader} from "../types/data";
import styled from "styled-components";

interface IProps extends ICountries, IPreloader{}

const Preloader = styled.img.attrs({
    src: preloader,
    alt: 'preloader'
})`
  position: absolute;
  top: 9rem;
  left: calc(50% - 80px);
`

const HomePage: React.FC<IProps> = (props) => {
    const {
        countries,
        setCountries,
        isPreloading,
        setPreloading
    } = props

    const  [filteredCountries, setFilteredCountries] = useState(countries)

    const handleSearch = (search: string, region: string): void => {
        let data = [...countries]

        if (region) {
            data = data.filter((i: ICountry) => i.region.includes(region))
        }

        if (search) {
            data = data.filter((i: ICountry) => i.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    useEffect(() => {
        if (countries.length === 0) {
            axios.get(ALL_COUNTRIES).then(response => setCountries(response.data))
            setPreloading(false)
        }
        // eslint-disable-next-line
    }, [])

    const renderFlags = filteredCountries.length > 0 ? filteredCountries : countries

    return (
        <>
            <Controls handleSearch={handleSearch}/>

            {isPreloading && <Preloader />}

            <List>
                {
                    renderFlags.map((i: ICountry, index: number) => {
                        const countryInfo = {
                            img: i.flags.png,
                            name: i.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: i.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: i.region
                                },
                                {
                                    title: 'Capital',
                                    description: i.capital
                                }
                            ]
                        }

                        if (index < 40) {
                            return (
                                <Card
                                    key={i.name}
                                    {...countryInfo}
                                />
                            )
                        } return null
                    })
                }
            </List>
        </>
    )
}

export default HomePage