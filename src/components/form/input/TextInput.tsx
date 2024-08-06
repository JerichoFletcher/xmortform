import "./input-field.css";

export default function TextInput(props: Readonly<{
  label?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
}>) {
  const labelText = props.label ?? "Enter your answer below";
  const placeholderText = props.placeholder ?? "Answer text";

  return (
    <div className="input-field">
      <label htmlFor="input-text">{labelText}</label>
      <input id="input-text" type="text" placeholder={placeholderText}
        onChange={props.onChange && (e => props.onChange!(e.target.value))}
      />
    </div>
  );
}
