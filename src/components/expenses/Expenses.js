import { useState } from "react";
import ExpensesList from "../expenses/ExpensesList";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from '../expenses/ExpensesChart';
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2020);
  // getting filter current select vlaue from ExepnseFilter.js and setting  the state
  const selectFilterHandler = (selectedFilterYear) => {
    setSelectedYear(selectedFilterYear);
  };
  // filltering  expenses besed on the years
  const filterdItems = props.items.filter((item) => {
    return item.date.getFullYear() === selectedYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        onFilterChange={selectFilterHandler}
        selectedYear={selectedYear}
      />
  {<ExpensesChart expenses={filterdItems}/>}
      {
        //puting expenses to dom
        <ExpensesList items={filterdItems}/>
      }
    </div>
  );
}

export default Expenses;
