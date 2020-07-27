import * as React from "react";
import { Search } from "../components/Search";
import { Container, Results } from "../container/index";
import { SearchBox } from "../components/SearchBox";
import { submitData } from "../interfaces";
import { data as conci } from "../mocks/conciliaciones";
import { data as sources } from "../mocks/fuentes";
import { data as boards } from "../mocks/tableros";
import { data as users } from "../mocks/usuarios";

export const SearchPage: React.FC = () => {
  const [searchFor, setSearch] = React.useState({ value: "", type: 0 });

  const submitForm = (information: submitData) => {
    setSearch(information);
  };
  return (
    <Container>
      <Search
        submit={submitForm}
        description="Busca en tableros, perfiles, fuentes y conciliaciones"
      />
      <Results>
        <SearchBox
          title="Conciliaciones"
          search={searchFor}
          data={conci}
          type={0}
        ></SearchBox>
        <SearchBox
          title="fuentes"
          data={sources}
          search={searchFor}
          type={1}
        ></SearchBox>
        <SearchBox
          title="Tableros"
          data={boards}
          search={searchFor}
          type={2}
        ></SearchBox>
        <SearchBox
          title="Perfiles"
          type={3}
          data={users}
          search={searchFor}
        ></SearchBox>
      </Results>
    </Container>
  );
};
