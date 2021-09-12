import React from 'react'
import CaseList from './CaseList'

const Cases = ({covidData}) => {
    return (
       <><table className = "list" >
       <tr>
           <th scope="col">Date</th>
           <th scope="col">New Cases</th>
           <th scope="col">New Death</th>
       </tr>
       
       
   </table>
           {covidData.cases.map((ca, index) => (
               <CaseList key = {index} ca = {ca}/>
      ))}
       </>
    )
}

export default Cases

