import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseList from "./components/Expenses/ExpenseList";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { unique } from "./utils/common";
import ExpenseChart from "./components/Expenses/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [yearFilter, setYearFilter] = useState(initialYearFilter);
  console.log("yearFilter:", yearFilter);

  const addNewExpense = (newExpense) =>
    setExpenses((prevState) => [newExpense, ...prevState]);

  const setNewYearFilter = (newYearFilter) => setYearFilter(newYearFilter);

  let filteredExpenses = expenses;

  if (yearFilter !== "All")
    filteredExpenses = expenses.filter((expense) => {
      const date = new Date(expense.date);
      console.log("fullYear:", date.getFullYear());
      return date.getFullYear() === +yearFilter;
    });

  let filterYears = [
    "All",
    ...unique(
      expenses.map((expense) => {
        const date = new Date(expense.date);
        return date.getFullYear();
      })
    ),
  ];

  return (
    <div className="w-full min-h-screen bg-black-dark flex flex-col justify-start items-center pt-8">
      <div className="flex flex-col w-1/2 space-y-2">
        <ExpenseForm onAddNewExpense={addNewExpense} />
        <ExpenseFilter
          years={filterYears}
          selected={yearFilter}
          onSelect={setNewYearFilter}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  );
}

const initialExpenses = [];
//   {
//     date: new Date(2022, 3, 21),
//     title: "Milk",
//     amount: "13$",
//     id: "Mock-Expense-Item",
//   },
// ];

const initialYearFilter = "All";

export default App;
