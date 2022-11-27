import React, { useState } from "react";
import BaseTextInput from "./BaseTextInput";
import List from "./List";
import Tags from "./Tags";

export type Tag = {
  id: string;
  label: string;
};

export default function TagInput() {
  const [showList, setShowList] = useState<boolean>(true);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchResult, setSearchResult] = useState<Tag[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  return (
    <div>
      <BaseTextInput />
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
