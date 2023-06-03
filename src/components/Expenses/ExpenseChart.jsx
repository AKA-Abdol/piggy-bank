import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { month } from "../../utils/date/statics";
import { trimName } from "../../utils/common";

function ExpenseChart(props) {
  const data = month
    .map((monthName) => trimName(monthName, 5, 3))
    .map((monthName, index) => {
      const totalExpense = props.expenses
        .filter((expense) => {
          const date = new Date(expense.date);
          return date.getMonth() === index;
        })
        .map((expense) => +expense.amount)
        .reduce((totalAmount, newAmount) => totalAmount + newAmount, 0);

      return {
        month: monthName,
        expense: totalExpense,
      };
    });

  const noData =
    data.reduce((total, { month, expense }) => total + expense, 0) <= 0;

  if (noData)
    return (
      <div className="text-white text-center font-bold text-2xl py-4 bg-secondary-dark">
        Nothing to Show
      </div>
    );

  return (
    <div className="w-full bg-secondary-dark pr-4 py-4">
      <ResponsiveContainer width={"100%"} aspect={4.0 / 1.5}>
        <BarChart data={data}>
          <CartesianGrid fill="white" strokeDasharray={"3 3"} />
          <XAxis dataKey={"month"} tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip />
          <Bar
            dataKey="expense"
            fill="#c18ef5"
            label={({ x, y, width, height, value }) => (
              <text x={x + width / 2} y={y} dy={(height > 0) ? height / 2 : -6} fill="black" textAnchor="middle">
                {`${value}$`}
              </text>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
