import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
//create a fn
const ExpensesList =(props)=>
{
    const receivedArray = props.item;
    console.log(receivedArray);
    //filter the received array
    const peculiarArray = receivedArray.filter(function(el)
    {
        //each el is an object
        console.log(el.date.getFullYear(),props.yearPassed);
        return (Number(el.date.getFullYear())===Number(props.yearPassed))
    })
    console.log(peculiarArray);
    //peculiar Array consists of filtered objects
    if(peculiarArray.length===0)
       { return <div className="expenses-list__fallback">No Expenses found</div>}
    return (peculiarArray.map(function(el,index)
    {
         return <ExpenseItem key={el.id} title={el.title } price={el.amount} date={el.date}></ExpenseItem>
    }))


}
    


   // let expenseContent = <p>No Expenses Found</p>;
  //if(pass.pass.length>0)
//   expenseContent=pass.pass.map(function(el,index)
//         {
//           return  <ExpenseItem key={el.id} title={el.title } price={el.amount} date={el.date}></ExpenseItem>
//         })
//}
 export default ExpensesList;