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