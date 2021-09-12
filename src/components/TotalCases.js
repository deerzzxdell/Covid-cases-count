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
        <div>
            <p>Total Cases: {Total}</p>
        </div>
    )
}

export default TotalCases
