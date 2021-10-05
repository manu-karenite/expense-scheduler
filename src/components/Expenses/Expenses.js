import "./Expenses.css";
import ExpenseItem  from "../Expenses/ExpenseItem";
import Card from "../UI/Card";

function Expenses(pass)
{
    return (
        <Card className="expenses">
        <ExpenseItem title={pass.pass[0].title } price={pass.pass[0].amount} date={pass.pass[0].date}></ExpenseItem>
      <ExpenseItem title={pass.pass[1].title } price={pass.pass[1].amount} date={pass.pass[1].date}></ExpenseItem>
      <ExpenseItem title={pass.pass[2].title } price={pass.pass[2].amount} date={pass.pass[2].date}></ExpenseItem>
      <ExpenseItem title={pass.pass[3].title } price={pass.pass[3].amount} date={pass.pass[3].date}></ExpenseItem>
        </Card>
    )
}
export default Expenses;