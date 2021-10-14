import "./Expenses.css";
import ExpenseItem  from "../Expenses/ExpenseItem";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import Card from "../UI/Card";
import {useState} from 'react';

function Expenses(pass)
{
  const [year,setYear]=useState("2020");
  const onChangeHandler=(event)=>
  {
    //console.log(event.target.value);
    setYear(event);
  }

  let expenseContent = <p>No Expenses Found</p>;
  if(pass.pass.length>0)
  expenseContent=pass.pass.map(function(el,index)
        {
          return  <ExpenseItem key={el.id} title={el.title } price={el.amount} date={el.date}></ExpenseItem>
        })
  
  console.log(pass.pass.length);
    return (
        <Card className="expenses">
        <ExpenseFilter selected={year} onChangeFilter={onChangeHandler}/>
        {expenseContent}
        </Card>
    )
}
export default Expenses;