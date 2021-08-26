import React from 'react'
import './ExpenseFilter.css'
 const ExpenseFilter = (props) => {
     const filterHandler = (e) =>{
    
    // send selected filter value to Expenses.js  
    props.onFilterChange(parseInt(e.target.value))
 
    
        }

    return (
        <div className="expenses-filter ">
            <div className="expenses-filter__control ">
                <label>
                    filter by year
                </label>
                <select onChange={filterHandler} value={props.selectedYear}>
                    <option>
                2020
                    </option>
                    <option>
                2021
                    </option>
                    <option >
                2022
                    </option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter