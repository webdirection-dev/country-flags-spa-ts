import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

import {IoArrowBack} from 'react-icons/io5'
import {searchByCountry} from "../config";

import {Button} from "../components/Button";
import Info from "../components/Info";

const Details: React.FC = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    const goBack = () => navigate(-1)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <>
            <Button onClick={goBack}>
                <IoArrowBack />Back
            </Button>

            {
                country && <Info navigate={navigate} {...country}/>
            }
        </>
    )
}

export default Details