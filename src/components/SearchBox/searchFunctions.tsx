import { Conciliacion } from "../../interfaces";

export const searchByText = (
  item: Conciliacion,
  value: string,
  searchProps: string[]
): boolean => {
  let find = false;
  let index = 0;
  while (!find && index < searchProps.length) {
    if (item.hasOwnProperty(searchProps[index])) {
      let dataValue = item[searchProps[index]];
      const toCompare = value.toLowerCase();
      const typeOfVarible = Object.prototype.toString.call(dataValue);
      if (typeOfVarible === "[object String]") {
        dataValue = dataValue.toLowerCase();
        find = dataValue.includes(toCompare);
      }
      if (typeOfVarible === "[object Array]") {
        dataValue = dataValue.toString().toLowerCase();
        find = dataValue.includes(toCompare);
      }
      if (typeOfVarible === "[object object]") {
        const valuesFromObject = Object.values(dataValue);
        const valuesToString = valuesFromObject.toString().toLowerCase();
        find = valuesToString.includes(toCompare);
      }
    }
    index++;
  }
  return find;
};

export const searchByNumber = (
  item: Conciliacion,
  value: string,
  searchProps: string[]
): boolean => {
  let find = false;
  let index = 0;
  while (!find && index < searchProps.length) {
    if (item.hasOwnProperty(searchProps[index])) {
      const valueFromArray = String(item[searchProps[index]]);
      const numbers = /\D/g;
      const dataValue = valueFromArray.replace(numbers, "");
      find = dataValue.includes(value);
    }
    index++;
  }
  return find;
};

export const searchByDates = (
  item: Conciliacion,
  value: string,
  searchProps: string[]
): boolean => {
  let find = false;
  let index = 0;
  return find;
};
