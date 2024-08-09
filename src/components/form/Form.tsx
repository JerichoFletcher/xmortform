'use client';

import { useState } from "react";
import "./Form.css";
import LongTextInput from "./input/LongTextInput";
import Prompt from "./Prompt";
import ShortTextInput from "./input/ShortTextInput";

export default function Form() {
  const [value, setValue] = useState<string>("");

  return (
    <div id="form-container">
      <Prompt required>
        What is your name?
      </Prompt>
      <ShortTextInput placeholder="Your name" onChange={setValue}/>
      <span id="button-group-container">
        <button className="button" id="button-next" onClick={e => {
          console.log(`Value: ${value}`);
        }}>Next</button>
      </span>
    </div>
  );
}
