import * as React from "react";
import { HeaderNav } from "../components/Header";
import { ContainerWrap, ResultsWrapper } from "./style";

export const Container = ({ head = true, children }) => (
  <>
    {head && <HeaderNav />}
    <ContainerWrap>{children}</ContainerWrap>
  </>
);

export const Results = ({ children }) => {
  return <ResultsWrapper>{children}</ResultsWrapper>;
};
