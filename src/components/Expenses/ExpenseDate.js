import "./ExpenseDate.css";

function ExpenseDate(props)
{
    let createdDate = new Date(props.date);
    //date is formed
    const day=new Intl.DateTimeFormat(navigator.language,{
        day: 'numeric',
    }  ).format(createdDate);
    const month=new Intl.DateTimeFormat(navigator.language,{
        month: 'short',
    }  ).format(createdDate);
    const year=new Intl.DateTimeFormat(navigator.language,{
        year:"2-digit",
    }  ).format(createdDate);

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>   
        </div>
    )
    
}
export default ExpenseDate;