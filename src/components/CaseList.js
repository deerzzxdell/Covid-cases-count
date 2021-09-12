import React from 'react'

const CaseList = ({ca}) => {
    return (
        <table className = "list">
            
            <tr>
                <td>{ca.txn_date}</td>
                <td>{ca.new_case}</td>
                <td>{ca.new_death}</td>
            </tr>
            
        </table>
    )
}

export default CaseList
