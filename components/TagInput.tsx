import React, { useState, useRef, useEffect } from "react";
import BaseTextInput from "./BaseTextInput";
import List from "./List";
import Tags from "./Tags";
import { checkIfTagAlreadyExists } from "../Helpers/helpers";
import FuzzySearch from "fuzzy-search";

export type Tag = {
  id: string;
  label: string;
};

type TagInputProps = {
  tags: Tag[];
};
export default function TagInput({ tags }: TagInputProps) {
  const [showList, setShowList] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchResult, setSearchResult] = useState<Tag[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const fuse = useRef<any>([]);

  useEffect(() => {
    fuse.current = new FuzzySearch(tags, ["label"], {
      caseSensitive: false,
    });
  }, [tags]);

  useEffect(() => {
    if (input.length > 0) {
      setSearchResult(() => fuse.current.search(input.trim()));
      setHighlightedIndex(0);
    } else {
      setSearchResult([]);
      setHighlightedIndex(-1);
    }
  }, [input]);

  useEffect(() => {
    if (searchResult.length > 0 && input.length > 0) {
      setShowList(true);
      setHighlightedIndex(0);
    } else {
      setShowList(false);
      setHighlightedIndex(-1);
    }
  }, [searchResult, input]);

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
      <BaseTextInput
        input={input}
        setInput={setInput}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        addTag={addTag}
      />

      <List
        searchResult={searchResult}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
        showList={showList}
        addTag={addTag}
      />
      {selectedTags.length > 0 && <Tags selectedTags={selectedTags} />}
    </div>
  );
}
