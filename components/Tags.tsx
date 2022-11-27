import React from "react";
import { TagsStyle } from "@styles/TagInputUI";
import type { Tag } from "@components//TagInput";

type TagsProps = {
  selectedTags: Tag[];
};

export default function Tags({ selectedTags }: TagsProps) {
  return (
    <TagsStyle>
      {selectedTags.map((item: Tag) => {
        return (
          <a href="#" key={item.id}>
            {item.label}
          </a>
        );
      })}
    </TagsStyle>
  );
}
