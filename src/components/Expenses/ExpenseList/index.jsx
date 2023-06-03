import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.expenses.length === 0) return <p className="bg-black-light text-white text-center">No Expenses Found</p>;
  return (
    <div className="flex flex-col w-full overflow-auto space-y-2 bg-black-light p-4">
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={new Date(expense.date)}
          description={expense.title}
          price={expense.amount}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
