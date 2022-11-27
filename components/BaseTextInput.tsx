import React, { ChangeEvent } from "react";
import { slugify } from "../Helpers/helpers";
import { Tag } from "./TagInput";

type BaseTextInputProps = {
  input: string;
  setInput: (text: string) => void;
  highlightedIndex: number | null;
  searchResult: Tag[];
  addTag: (item: Tag) => void;
};
export default function BaseTextInput({
  input,
  setInput,
  highlightedIndex,
  searchResult,
  addTag,
}: BaseTextInputProps) {
  function handleKeyDown(e: KeyboardEvent) {
    const keysArray = ["Comma", "Enter", "Escape", "ArrowDown", "ArrowUp"];
    if (!keysArray.includes(e.code)) {
      return;
    }
    e.preventDefault();
    switch (e.code) {
      case "Comma":
      case "Enter":
        let itemValue: string = input.trim();
        if (itemValue.length === 0) return;
        let slug = "";
        if (e.code === "Enter" && highlightedIndex !== null) {
          itemValue = searchResult[highlightedIndex].label;
          slug = searchResult[highlightedIndex].id;
        } else {
          slug = slugify(itemValue);
        }
        addTag({ id: slug, label: itemValue });
        break;
    }
  }

  return (
    <>
      <input
        placeholder="Add tags..."
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyDown={handleKeyDown}
        // onBlur={handleBlur}
      />
    </>
  );
}
