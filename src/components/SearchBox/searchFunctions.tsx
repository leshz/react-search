import { Conciliation } from "../../interfaces";

export const searchByText = (
  item: Conciliation,
  value: string,
  searchProps: string[]
): boolean => {
  let find = false;
  let index = 0;
  while (!find && index < searchProps.length) {
    if (item.hasOwnProperty(searchProps[index])) {
      let dataValue = item[searchProps[index]];
      const toCompare = value.toLowerCase();
      if (Array.isArray(dataValue)) {
        dataValue = dataValue.toString().toLowerCase();
        find = dataValue.includes(toCompare);
      } else {
        dataValue = dataValue.toLowerCase();
        find = dataValue.includes(toCompare);
      }
    }
    index++;
  }
  return find;
};

export const searchByNumber = (
  item: Conciliation,
  value: string,
  searchProps: string[]
): boolean => {
  let find = false;
  let index = 0;
  while (!find && index < searchProps.length) {
    if (item.hasOwnProperty(searchProps[index])) {
      const numbers = /\D/g;
      const dataValue = item[searchProps[index]].replace(numbers, "");
      find = dataValue.includes(value);
    }
    index++;
  }
  return find;
};
