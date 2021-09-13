import React from 'react'
import styled from 'styled-components'

type Todo = {
    ca : {
        new_case: number,
        txn_date: string,
        new_death: number,
    }
}

const List = styled.table`
    border: none; 
    width: 400px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
`;

const DataList = styled.td`
    text-align: center;
    border: none; 
    width: 100px;
`;

const CaseList = ({ca}:Todo) => {
    return (
        <List>
            
            <tr>
                <DataList>{ca.txn_date}</DataList>
                <DataList>{ca.new_case}</DataList>
                <DataList>{ca.new_death}</DataList>
            </tr>
            
        </List>
    )
}

export default CaseList
