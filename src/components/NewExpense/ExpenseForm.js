
import "./ExpenseForm.css";
import {useState} from 'react';
const ExpenseForm = (props)=>
{
    
    const [enteredtitle,setTitle] = useState("");
    const [enteredamount,setAmount] = useState("");
    const [entereddate,setDate]=useState("");

    const setTitleHandler=(event)=>
    {
        setTitle(event.target.value);
    }

     const setAmountHandler=(event)=>
    {
        setAmount(event.target.value);
    }
    const setDateHandler=(event)=>
    {
        setDate(event.target.value);
    }
    const formHandler = (event)=>
    {

        event.preventDefault();
        const newObj = 
        {
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)
        }
        props.onNewForm(newObj);
        //clear the form
        setAmount("");
        setTitle("");
        setDate(""); //2 way binding
        
    }
    return <form onSubmit={formHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={setTitleHandler} value={enteredtitle} required placeholder="Expense Name Here"/>
            </div>
             <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={setAmountHandler} required placeholder="Amount Here"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"  value={entereddate} onChange={setDateHandler} required/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">New Expense</button>
        </div>
    </form>
}
export default ExpenseForm;