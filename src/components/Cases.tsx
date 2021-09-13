import React from 'react'
import CaseList from './CaseList'
import styled from 'styled-components'

type Todo = {
    covidData: {
        cases:{
            new_case: number,
            txn_date: string,
            new_death: number,
        }[],
    }  
}

const List = styled.table`
    border: none; 
    width: 400px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
`;

const Col = styled.th`
    border: none; 
    width: 100px;
`;

const Cases = ({covidData}:Todo) => {
    return (
       <><List>
       <tr>
           <Col scope="col">Date</Col>
           <Col scope="col">New Cases</Col>
           <Col scope="col">New Death</Col>
       </tr>
       
       
   </List>
           {covidData.cases.map((ca, index:number) => (
               <CaseList key = {index} ca = {ca}/>
      ))}
       </>
    )
}

export default Cases

