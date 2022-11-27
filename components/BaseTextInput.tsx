import React, { ChangeEvent } from "react";

type BaseTextInputProps = {
  input: string;
  setInput: (text: string) => void;
};
export default function BaseTextInput({ input, setInput }: BaseTextInputProps) {
  return (
    <>
      <input
        placeholder="Add tags..."
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        // onKeyDown={handleKeyDown}
        // onBlur={handleBlur}
      />
    </>
  );
}
