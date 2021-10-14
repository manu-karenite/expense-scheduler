
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "../src/components/NewExpense/NewExpense";
import "./App.css";
 import {useState} from 'react';
const expenses = [

    
  ];
function App() {
   let [originalItem,setOriginalItem] =useState (expenses);
  

  const onCreateHandler=(receivedObject)=>
  {
    //we need to append it to an array expenses
    setOriginalItem((originalItem)=>
    {
       const a = [receivedObject,...originalItem];
       return a;
    });
  };
  return (
    <div>
      <center> <h3 className="title">Expense Scheduler</h3></center>
       <NewExpense onCreate = {onCreateHandler}/>
      <Expenses pass={originalItem}/>
    </div>
  );
}

export default App;
