import React from "react";
import {useParams} from "react-router-dom";

const Details: React.FC = () => {
    const params = useParams()
    return (
        <h1>{params.name}</h1>
    )
}

export default Details