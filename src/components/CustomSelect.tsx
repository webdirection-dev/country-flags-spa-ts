import React from 'react';
import Select from "react-select";
import styled from "styled-components";
import {ISelect} from "../types/data";

const MySelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            boxShadow: 'var(--shadow)',

            height: '50px',
            border: 'none',
            padding: '0.25rem',
        }),

        option: (provided, state) => ({
            ...provided,
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',

            cursor: 'pointer',
        }),
    }
})`
  font-family: var(--family);
  border-radius: var(--radii);
  
  width: 200px;
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & input {
    padding-left: 0.25rem;
  }
  
  & * {
    color: var(--colors-text) !important;
  }
  
  & > [id] {
    background-color: var(--colors-ui-base);
  }
`

const CustomSelect: React.FC<ISelect> = (props) => {
    const {
        isRegion,
        placeholder,
        options,
        isClearable,
        isSearchable,
        setRegion,
    } = props

    return(
        <div>
            <MySelect
                // value={isRegion}
                placeholder={placeholder}
                options={options}
                isClearable={isClearable}
                isSearchable={isSearchable}
                // onChange={setRegion}
            />
        </div>
    )
}

export default CustomSelect

//2-й Вариант
// export const CustomSelect = styled(Select).attrs({
//     styles: {
//         control: (provided) => ({
//             ...provided,
//             backgroundColor: 'var(--colors-ui-base)',
//             color: 'var(--colors-text)',
//             borderRadius: 'var(--radii)',
//             boxShadow: 'var(--shadow)',
//
//             height: '50px',
//             border: 'none',
//             padding: '0.25rem',
//         }),
//
//         option: (provided, state) => ({
//             ...provided,
//             color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
//             backgroundColor: state.isSelected ? 'var(--colors-text)' : 'var(--colors-bg)',
//
//             cursor: 'pointer',
//         }),
//     }
// })``