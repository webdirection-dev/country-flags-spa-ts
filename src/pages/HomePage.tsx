import React, {useState, useEffect} from 'react';
import axios from "axios";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {ALL_COUNTRIES} from "../config";

import {ICountry, ICountries} from "../types/data";

const HomePage: React.FC<ICountries> = ({countries, setCountries}) => {

    useEffect(() => {
        if (countries.length === 0) {
            axios.get(ALL_COUNTRIES).then(response => setCountries(response.data))
        }
    }, [])

    return (
        <>
            <Controls />
            <List>
                {
                    countries.map((i: ICountry) => {
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

                        return (
                            <Card
                                key={i.name}
                                {...countryInfo}
                            />
                        )
                    })
                }
            </List>
        </>
    )
}

export default HomePage