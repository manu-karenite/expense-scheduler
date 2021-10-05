import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(data)
{
    return (
         <div className="expense-item">
      <ExpenseDate date={data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">{data.price}</div>
      </div>
    </div>
    )
}
export default ExpenseItem;