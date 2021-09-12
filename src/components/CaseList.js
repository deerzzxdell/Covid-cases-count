import React from 'react'

const CaseList = ({ca}) => {
    return (
        <ul>
            <li>Date: {ca.txn_date}  New cases: {ca.new_case} New Death: {ca.new_death}</li>
        </ul>
    )
}

export default CaseList
