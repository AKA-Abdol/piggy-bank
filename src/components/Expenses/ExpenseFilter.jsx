function ExpenseFilter(props) {
  const handleChange = (event) => {
    const target = event.target;
    props.onSelect(target.value);
  };
  return (
    <div className="w-full flex flex-row justify-between items-center p-4 bg-secondary-dark space-x-2">
      <label htmlFor="years" className="text-white font-bold">
        Filter by year
      </label>
      <select
        onChange={handleChange}
        name="years"
        className="h-8 w-20 text-center rounded-md font-bold"
        value={props.selectedr}
      >
        {props.years.map((year) => (
          <option value={year} key={`year-${year}`}>{year}</option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;
