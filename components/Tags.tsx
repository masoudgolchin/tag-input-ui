import { MouseEvent } from "react";
import { TagsStyle } from "@styles/TagInputUI";
import type { Tag } from "@components//TagInput";
import { toast } from "react-toastify";
type TagsProps = {
  selectedTags: Tag[];
  setSelectedTags: (fn: (prev: Tag[]) => Tag[]) => void;
};

export default function Tags({ selectedTags, setSelectedTags }: TagsProps) {
  const handleRemoveOnClick = (item: Tag) => {
    setSelectedTags((prev: Tag[]) => {
      return prev.filter((tag: Tag) => item.label !== tag.label);
    });
    toast.success("Tag deleted successfuly");
  };

  return (
    <TagsStyle>
      {selectedTags.map((item: Tag) => {
        return (
          <a
            href="#"
            key={item.id}
            onClick={(e: MouseEvent<HTMLElement>) => {
              e.preventDefault();
              handleRemoveOnClick(item);
            }}
          >
            {item.label}
          </a>
        );
      })}
    </TagsStyle>
  );
}
