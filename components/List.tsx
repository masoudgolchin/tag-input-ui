import React, { MouseEvent } from "react";
import type { Tag } from "./TagInput";

type ListProps = {
  searchResult: Tag[];
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
};

export default function List({
  searchResult,
  highlightedIndex,
  setHighlightedIndex,
}: ListProps) {
  return (
    <ul tabIndex={-1}>
      {searchResult.map((item: Tag, index: number) => {
        return (
          <li
            key={item.id}
            className={highlightedIndex === index ? "highlighted" : ""}
            onMouseOver={(e: MouseEvent) => setHighlightedIndex(index)}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}