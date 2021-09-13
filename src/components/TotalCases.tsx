import React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

type Todo = {
    covidCase: {
        cases:{
            new_case: number,
        }[],
    }  
}

const TotalCases = ({covidCase}:Todo) => {
    const Total = useMemo(() => {
        let newAmount = 0;
        for(let i = 0; i < covidCase.cases.length; i++){
            newAmount += covidCase.cases[i].new_case
        }
        return newAmount
    },[covidCase])

const Header = styled.div`
    font-size: 20pt;
    text-align: center;
`;

    return (
        <Header>
            <p>Total Cases: </p>
            <h2>{Total}</h2>
        </Header>
    )
}

export default TotalCases
