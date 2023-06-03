import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../common/Input";
import Button from "../common/Button";

const INITIAL_FORM = {
  title: "",
  amount: "",
  date: "",
};

function ExpenseForm(props) {
  const [formStatus, setFromStatus] = useState(initialFormStatus);
  const [form, setForm] = useState(INITIAL_FORM);

  const setValue = (event) => {
    const target = event.target;
    setForm((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const clearValues = () => setForm(INITIAL_FORM);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddNewExpense({
      ...form,
      id: uuidv4(),
    });
    clearValues();
  };

  const toggleFormStatus = () => {
    setFromStatus((prevFormStatus) =>
      prevFormStatus === "close" ? "open" : "close"
    );
  };

  if (formStatus === "close")
    return (
      <div className="w-full flex justify-center bg-secondary-light py-4">
        <Button
          type={"button"}
          bgColor={"bg-secondary"}
          onClick={toggleFormStatus}
        >
          Add New Expense
        </Button>
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full bg-secondary-light px-4 pb-4 rounded-lg">
        <div className="flex flex-row w-full space-x-4">
          <div className="flex flex-col justify-start items-center w-1/2 space-y-4 py-2">
            <Input
              title={"Title"}
              type={"text"}
              borderColor={"border-secondary-dark"}
              onChange={setValue}
              name={"title"}
              value={form.title}
            />
            <Input
              title={"Date"}
              type={"date"}
              borderColor={"border-secondary-dark"}
              onChange={setValue}
              name={"date"}
              value={form.date}
            />
          </div>
          <div className="flex flex-col justify-start items-center w-1/2 space-y-4 py-2">
            <Input
              title={"Amount"}
              type={"text"}
              borderColor={"border-secondary-dark"}
              onChange={setValue}
              name={"amount"}
              value={form.amount}
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <Button
            type={"button"}
            bgColor={"bg-secondary-dark"}
            onClick={toggleFormStatus}
          >
            Cancel
          </Button>
          <div className="flex flex-row justify-end w-full space-x-2">
            <Button
              type={"button"}
              bgColor={"bg-secondary-dark"}
              onClick={clearValues}
            >
              Clear
            </Button>
            <Button type={"submit"} bgColor={"bg-secondary"}>
              Done
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

const initialFormStatus = "close";

export default ExpenseForm;
