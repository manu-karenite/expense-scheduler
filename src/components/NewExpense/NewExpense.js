import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>
{
    const onNewFormHandler=(receivedData)=>
    {
        //we have received the data
        const idCreate=Math.trunc((Math.random()*100+1).toString());
        //  newObject = {
        //     ...receivedData,
        //     id:idCreate
        // };

       const newOb = 
       {
         ...receivedData,
         id:"e"+idCreate
       }
       console.log (newOb);
         props.onCreate(newOb);
    }
   
    return <div className="new-expense">
        <ExpenseForm onNewForm = {onNewFormHandler}/>
        </div>
}
export default NewExpense;