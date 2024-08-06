import "./Form.css";
import TextInput from "./input/TextInput";
import Prompt from "./Prompt";

export default function Form() {
  return (
    <div id="form-container">
      <Prompt required>
        Example prompt: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Prompt>
      <TextInput placeholder="Example placeholder text"/>
    </div>
  );
}
