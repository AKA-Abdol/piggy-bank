import DateShow from "../../common/DateShow";

function ExpenseItem({ date, description, price }) {
  return (
    <div className="w-full p-2 bg-black flex flex-row justify-between items-center rounded-xl text-white">
      <DateShow date={date} />
      <div className="w-full flex flex-row p-4">
        <div>{description}</div>
      </div>
      <div className="p-4 bg-secondary text-white text-xl border-2 rounded-2xl border-white">
        {price}$
      </div>
    </div>
  );
}

export default ExpenseItem;
