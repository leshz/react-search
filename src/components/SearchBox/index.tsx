import * as React from "react";
import { Box, Title, Content, Result } from "./style";
import { ConciliationItem } from "../ConciliationItem";
import { UserItem } from "../UserItem";
import { BoardItem } from "../BoardItem";
import { SourceItem } from "../SourceItem";
import { searchBoxProps, submitData } from "../../interfaces";
import { searchByText, searchByNumber } from "./searchFunctions";

const searchText = [
  "conciliationName",
  "sourceA",
  "sourceB",
  "description",
  "tags",
  "name",
  "company",
  "dashboardName",
  "visualType",
  "visuals",
  "gender",
  "email",
  "phone",
  "address",
];
const searchDataNumber = ["balance", "index", "age", "phone"];

const Components = [ConciliationItem, SourceItem, BoardItem, UserItem];

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
  type,
}) => {
  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    const filtered = searchByType(data, search);
    setResults(filtered);
  }, [search]);

  const CompomentItem = Components[type];

  const searchItems = results.map((item) => (
    <CompomentItem {...item} key={item.index} selected={search.value} />
  ));

  const numResults = searchItems.length;
  if (numResults === 0) return null;
  return (
    <Box className={`${numResults > 0 ? "visible" : ""}`}>
      <Title>{title}</Title>
      <Result>{numResults} resultados</Result>
      <hr />
      <Content>{searchItems}</Content>
    </Box>
  );
};
