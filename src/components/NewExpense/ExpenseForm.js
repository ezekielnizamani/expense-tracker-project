
import {useState} from 'react'
import "./ExpenseForm.css";
const ExpenseForm = (props) =>{

    const [newTitle,setNewTitle] = useState('');
    const [newAmount,setNewAmount] = useState('');
    const [newDate,setNewDate] = useState('');
    
    // const [newExpense, setNewExpense] = useState({
    //     newtitle:' ',
    //     newAmount:' ',
    //     newDate:' ',
    // })
    const titleChangeHandler = (event) =>{
        setNewTitle(event.target.value);
     
        // setNewExpense({
        //     ...newExpense,
        //     newtitle:event.target.value,
         
        // })
        // setNewExpense((pervState)=>{
        //     return {...pervState, newtitle:event.target.value}
        // })
        // console.log(newExpense.newtitle);
    }

    const amountChangeHandler = (event) =>{
        setNewAmount(event.target.value);

        // setNewExpense({
        //     ...newExpense,
        //     newAmount:event.target.value,
         
        // })
        // console.log(newExpense.newAmount);
    }
    const dateChangeHandler = (event) =>{
        setNewDate(event.target.value);
 
        // setNewExpense({
        //     ...newExpense,
        //     newDate:event.target.value,
         
        // })
        
        // console.log(newExpense.newDate);
    
    }
    const submitHandler = event =>{
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate),
          };
        props.onSaveExpenseDate(expenseData)
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
    }
return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input type="text"  value={newTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>
                amount
                </label>
                <input type="number" value={newAmount} onChange={amountChangeHandler} min="0.01"  step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>
                    date
                </label>
                <input type="date" value={newDate} onChange={dateChangeHandler} min="2020-02-15" max="2022-01-20"/>
            </div>

        </div>
        <div className="new-expense__actions">

            <button type="submit">Add expense</button>
        </div>
    </form>
)
}

export default ExpenseForm;