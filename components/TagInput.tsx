import React, { useState } from "react";
import BaseTextInput from "./BaseTextInput";
import List from "./List";
import Tags from "./Tags";
import { checkIfTagAlreadyExists } from "../Helpers/helpers";

export type Tag = {
  id: string;
  label: string;
};

export default function TagInput() {
  const [showList, setShowList] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchResult, setSearchResult] = useState<Tag[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  function addTag(item: Tag) {
    setShowList(false);
    if (checkIfTagAlreadyExists(item, selectedTags)) {
      console.log("exists");
      return;
    }
    setSelectedTags((prev) => [...prev, { ...item }]);
    setInput("");
  }

  return (
    <div>
      <BaseTextInput input={input} setInput={setInput} />
      {showList && (
        <List
          searchResult={searchResult}
          highlightedIndex={highlightedIndex}
          setHighlightedIndex={setHighlightedIndex}
        />
      )}
      {selectedTags.length > 0 && <Tags selectedTags={selectedTags} />}
    </div>
  );
}
