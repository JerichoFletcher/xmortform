import './Prompt.css';
import React from 'react';

export default function Prompt(props: Readonly<{
  children: React.ReactNode;
  required?: boolean;
}>) {
  return (
    <div id="prompt-container">
      {props.required && <p id="label-required">Required</p>}
      <p id="prompt-text">
        {props.children}
      </p>
    </div>
  );
}
