import { Tag } from "@components/TagInput";

export function checkIfTagAlreadyExists(item: Tag, selectedItems : Tag[]) {
    return selectedItems.some((selectedItem : Tag) => item.label === selectedItem.label)
}

export function slugify(str : string) {
    return str.trim().replaceAll(/ /g, "-").toLowerCase();
}