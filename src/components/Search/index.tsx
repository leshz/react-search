import * as React from "react";
import { FormSearch, Input, Button } from "./style";
import { useInputValue } from "../../hooks/useInputValue";

export const Search = ({ submit }) => {
  const search = useInputValue("");
  const submitForm = (e) => {
    e.preventDefault();
    submit(search.value);
  };

  return (
    <FormSearch onSubmit={submitForm}>
      <Input
        type="text"
        placeholder="Busca en tableros, perfiles, fuentes y conciliaciones"
        {...search}
      ></Input>
      <button>Hola</button>
      <button>Hola</button>
      <button>Hola</button>
      <button>Hola</button>
      <Button type="submit">Buscar</Button>
    </FormSearch>
  );
};
