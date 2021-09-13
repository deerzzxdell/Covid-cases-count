import React from 'react'
import { useMemo } from 'react'

const TotalCases = ({covidCase}) => {
    const Total = useMemo(() => {
        let newAmount = 0;
        for(let i = 0; i < covidCase.cases.length; i++){
            newAmount += covidCase.cases[i].new_case
        }
        return newAmount
    },[covidCase])
    return (
        <div className = "header">
            <p>Total Cases: </p>
            <h2>{Total}</h2>
        </div>
    )
}

export default TotalCases
