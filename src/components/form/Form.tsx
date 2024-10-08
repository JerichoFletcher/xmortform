'use client';

import { useState } from "react";
import "./Form.css";
import Input from "./input";
import Prompt from "./Prompt";

export default function Form() {
  const [value, setValue] = useState<string>("");

  return (
    <div id="form-container">
      <Prompt required>
        What is your name?
      </Prompt>
      <Input.ShortText placeholder={"Your name"} onChange={setValue}/>
      <span id="button-group-container">
        <button className="button" id="button-next" onClick={e => {
          console.log(`Value: ${value}`);
        }}>Next</button>
      </span>
    </div>
  );
}
