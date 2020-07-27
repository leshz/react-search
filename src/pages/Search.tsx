import * as React from "react";
import { Search } from "../components/Search";
import { Container, Results } from "../container/index";
import { SearchBox } from "../components/SearchBox";
import { submitData } from "../interfaces";
import { data as conci } from "../mocks/conciliaciones";

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
          data={conci}
          search={searchFor}
        ></SearchBox>
        {/* <SearchBox
          title="fuentes"
          data={fuentes}
          search={searchFor}
        ></SearchBox> */}
        {/* <SearchBox title="Tableros" data={data1} search={searchFor}></SearchBox>
        <SearchBox title="Perfiles" data={data1} search={searchFor}></SearchBox> */}
      </Results>
    </Container>
  );
};
