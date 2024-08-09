'use client';

import "./input-field.css";

export default function ShortTextInput({
  label, placeholder, onChange
}: Readonly<{
  label?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
}>) {
  const labelText = label ?? "Enter your answer below";
  const placeholderText = placeholder ?? "Short answer text";

  return (
    <div className="input-field">
      <label htmlFor="input-text">{labelText}</label>
      <input id="input-text" type="text" placeholder={placeholderText}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </div>
  )
}
