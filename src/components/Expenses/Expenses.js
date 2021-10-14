import "./Expenses.css";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import Card from "../UI/Card";
import {useState} from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(pass)
{
  const [year,setYear]=useState("2020");
  const onChangeHandler=(event)=>
  {
    //console.log(event.target.value);
    setYear(event);
  }
  //console.log(pass.pass.length);
    return (
        <Card className="expenses">
        <ExpenseFilter selected={year} onChangeFilter={onChangeHandler}/>
        <ExpensesList item={pass.pass} yearPassed={year}/>
        </Card>
    )
}
export default Expenses;