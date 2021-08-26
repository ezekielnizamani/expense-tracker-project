import React from 'react'
import ExpenseItem from "../expenseItem/ExpenseItem";
import './ExpensesList.css'
 const ExpensesList = (props) => {
    //  put this h2 in dom if there no items
    if(props.items.length === 0 ){
        return <h2 className="expenses-list__fallback">There are no expense 
        </h2>;
      
    }
    
    return (
        <ul className="expenses-list__items"> 
                {
                     props.items.map((item) => (
                        <ExpenseItem
                          title={item.title}
                          amount={item.amount}
                          date={item.date}
                          key={item.id}
                        />
                      ))
                }
        </ul>
    )
}


export default ExpensesList;