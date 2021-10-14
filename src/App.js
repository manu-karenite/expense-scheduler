
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "../src/components/NewExpense/NewExpense";

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
       console.log(a);
       return a;
    });
  };
  return (
    <div>
     
       <NewExpense onCreate = {onCreateHandler}/>
      <Expenses pass={originalItem}/>
    </div>
  );
}

export default App;
