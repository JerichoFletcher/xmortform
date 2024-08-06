'use client';

import { useLayoutEffect, useRef } from "react";
import "./input-field.css";

export default function LongTextInput({
  label, placeholder, onChange
}: Readonly<{
  label?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
}>) {
  const labelText = label ?? "Enter your answer below";
  const placeholderText = placeholder ?? "Answer text";

  const textArea = useRef<HTMLTextAreaElement>(null);

  function adjustAreaHeight() {
    if(textArea.current) {
      textArea.current.style.height = "inherit";
      textArea.current.style.height = `${textArea.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(adjustAreaHeight, []);

  return (
    <div className="input-field">
      <label htmlFor="input-text">{labelText}</label>
      <textarea ref={textArea} id="input-text" placeholder={placeholderText} rows={1}
        onChange={e => {
          if(onChange) onChange(e.target.value);
          adjustAreaHeight();
        }}
      />
    </div>
  );
}
