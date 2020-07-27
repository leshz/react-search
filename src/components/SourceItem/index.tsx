import * as React from "react";
import { SourceItemProps } from "../../interfaces";

export const SourceItem: React.FC<SourceItemProps> = ({ company }) => {
  return <p>{company}</p>;
};
