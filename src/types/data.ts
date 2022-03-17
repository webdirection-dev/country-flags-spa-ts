import {Dispatch, SetStateAction} from "react";

export interface ISearch {
    isSearch: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export interface ISelect {
    isRegion: string;
    placeholder: string;
    options: {value: string, label: string}[];
    isClearable: boolean;
    isSearchable: boolean;
    setRegion: Dispatch<SetStateAction<string>>
}

export interface ICountries {
    countries: never[];
    setCountries: Dispatch<SetStateAction<never[]>>;
}

export interface ICountry {
    name: string;
    capital: string;
    region: string;
    population: number;
    flags: {png: string, svg: string};
    independent: boolean;
}

export interface ICard {
    img: string;
    name: string;
    info: {title: string, description: string}[];
}

export interface ICardList {
    title: string,
    description: string
}