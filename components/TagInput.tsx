import React, { useState } from "react";
import BaseTextInput from "./BaseTextInput";
import List from "./List";
import Tags from "./Tags";

export type Tag = {
  id: string;
  label: string;
};

export default function TagInput() {
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  return (
    <div>
      <BaseTextInput />
      {showList && <List />}
      {selectedTags.length > 0 && <Tags selectedTags={selectedTags} />}
    </div>
  );
}
