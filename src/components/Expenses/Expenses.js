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
  
  console.log(pass.pass.length);
    return (
        <Card className="expenses">
        <ExpenseFilter selected={year} onChangeFilter={onChangeHandler}/>
      {
       
        pass.pass.map(function(el,index)
        {
          return  <ExpenseItem key={el.id} title={el.title } price={el.amount} date={el.date}></ExpenseItem>
        })
      
      }
        </Card>
    )
}
export default Expenses;