import React, { ChangeEvent } from "react";
import { slugify } from "../Helpers/helpers";
import { Tag } from "./TagInput";

type BaseTextInputProps = {
  input: string;
  setInput: (text: string) => void | string;
  highlightedIndex: number;
  setHighlightedIndex: any; //(index: number) => void | number;
  searchResult: Tag[];
  setSearchResult: (item: Tag[]) => void;
  addTag: (item: Tag) => void;
};
export default function BaseTextInput({
  input,
  setInput,
  highlightedIndex,
  setHighlightedIndex,
  searchResult,
  setSearchResult,
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
      case "Escape":
        setSearchResult([]);
        break;
      case "ArrowDown":
        if (searchResult.length - 1 > highlightedIndex) {
          setHighlightedIndex((prev: number) => prev + 1);
        }
        break;
      case "ArrowUp":
        if (highlightedIndex > 0) {
          setHighlightedIndex((prev: number) => prev - 1);
        }
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
