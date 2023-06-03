function Input(props) {
  return (
    <div className="flex flex-col w-full justify-start items-start space-y-1">
      <label className="font-bold">{props.title}</label>
      <input
        type={props.type}
        className={` w-full h-8 border-2 rounded-lg px-2 ${props.borderColor}`}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default Input;
