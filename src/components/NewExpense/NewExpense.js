import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const expenseDataHandler = (newExpenseData) =>{
        const expense = {
            ...newExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expense);
    }
    return(
         <div className="new-expense">
             <ExpenseForm onSaveExpenseDate={expenseDataHandler}/>
    </div>)
}


export default NewExpense