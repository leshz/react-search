import * as React from "react";
import { Box } from "./style";
import { ConciliationItem } from "../ConciliationItem";
import { searchBoxProps, submitData } from "../../interfaces";
import { searchByText, searchByNumber } from "./searchFunctions";

const searchText = [
  "conciliationName",
  "sourceA",
  "sourceB",
  "description",
  "tags",
];

const searchDataNumber = ["balance"];

const searchByType = (information = [], search: submitData) => {
  let filted = [];
  const { value, type } = search;
  if (value !== "") {
    switch (type) {
      case 0:
        filted = information.filter((item) =>
          searchByText(item, value, searchText)
        );
        break;
      case 1:
        filted = information.filter((item) =>
          searchByNumber(item, value, searchDataNumber)
        );
        break;

      default:
        break;
    }
  }
  return filted;
};

export const SearchBox: React.FC<searchBoxProps> = ({
  title,
  search,
  data,
}) => {
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    const filtered = searchByType(data, search);
    setResults(filtered);
  }, [search]);

  const searchItems = results.map((item) => (
    <ConciliationItem {...item} selected={search.value} />
  ));
  return (
    <Box>
      <h1>{title}</h1>
      {searchItems}
    </Box>
  );
};
