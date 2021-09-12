import React from 'react'
import CaseList from './CaseList'

const Cases = ({covidData}) => {
    return (
       <>
           {covidData.cases.map((ca, index) => (
               <CaseList key = {index} ca = {ca}/>
      ))}
       </>
    )
}

export default Cases

