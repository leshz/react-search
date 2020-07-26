import * as React from "react";

import { Search } from "../components/Search";
import { Container } from "../container/index";

interface submitData {
  value: string;
  type: number;
}

export const SearchPage: React.FC = (props) => {
  const [searchFor, setSearch] = React.useState({ value: "", type: 0 });

  const submitForm = (information: submitData) => {
    setSearch(information);
  };
  console.log(searchFor);

  return (
    <Container>
      <Search
        submit={submitForm}
        description="Busca en tableros, perfiles, fuentes y conciliaciones"
      />
    </Container>
  );
};
