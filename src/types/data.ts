import {Dispatch, SetStateAction} from "react";
import {NavigateFunction} from "react-router-dom";

export interface ISearch {
    isSearch: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export interface ISelect {
    // isRegion: string;
    placeholder: string;
    options: {value: string, label: string}[];
    isClearable: boolean;
    isSearchable: boolean;
    setRegion: any;
    // setRegion: Dispatch<SetStateAction<string>>
}

export interface ICountries {
    countries: never[];
    setCountries: Dispatch<SetStateAction<never[]>>;
}

export interface IPreloader {
    isPreloading: boolean;
    setPreloading: Dispatch<SetStateAction<boolean>>;
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

export interface ICountryDetails {
    name: string,
    nativeName: string,
    flag: string,
    capital: string,
    population: string,
    region: string,
    subregion: string,
    topLevelDomain: string[],
    currencies: {code: string, name: string, symbol: string}[],
    languages: {iso639_1: string, iso639_2: string, name: string, nativeName: string}[],
    borders?: string[],
    navigate: NavigateFunction
}