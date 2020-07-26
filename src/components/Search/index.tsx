import * as React from "react";
import {
  FormSearch,
  Input,
  Button,
  InputWrap,
  ButtonInput,
  Description,
} from "./style";
import { useInputValue } from "../../hooks/useInputValue";
import { FiType, FiCalendar, FiPercent } from "react-icons/fi";

interface submitData {
  value: string;
  type: number;
}
interface PropsSearch {
  description?: string;
  submit: (value: submitData) => void;
}

export const Search: React.FC<PropsSearch> = ({ submit, description = "" }) => {
  const { isValidInput, isError, value, onChange } = useInputValue("");
  const [selector, setSelector] = React.useState(0);
  const submitForm = (e) => {
    e.preventDefault();
    if (!isError) {
      submit({ value, type: selector });
    }
  };
  const handlerClick = (type: number) => {
    isValidInput(value, type);
    setSelector(type);
  };

  const getMessageFromType = (type: number) => {
    switch (type) {
      case 0:
        return "Buscar por textos";
      case 1:
        return "Buscar por números";
      case 2:
        return "Buscar por fechas";
      default:
        return "";
    }
  };
  const handerChangeInput = (ev) => {
    onChange(ev, selector);
  };

  return (
    <FormSearch onSubmit={submitForm}>
      <InputWrap className={`${isError ? "error" : ""}`}>
        <Input
          type="text"
          placeholder={getMessageFromType(selector)}
          value={value}
          onChange={handerChangeInput}
        ></Input>
        <ButtonInput
          className={`${selector === 0 ? "active" : ""}`}
          type="button"
          onClick={() => handlerClick(0)}
        >
          <FiType size={20} />
        </ButtonInput>
        <ButtonInput
          className={`${selector === 1 ? "active" : ""}`}
          type="button"
          onClick={() => handlerClick(1)}
        >
          <FiPercent size={20} />
        </ButtonInput>
        <ButtonInput
          className={`${selector === 2 ? "active" : ""}`}
          type="button"
          onClick={() => handlerClick(2)}
        >
          <FiCalendar size={20} />
        </ButtonInput>
        <Button type="submit">Buscar</Button>
      </InputWrap>
      <Description>{description}</Description>
    </FormSearch>
  );
};
