import * as React from "react";
import { ConciliationItemProps } from "../../interfaces";

export const ConciliationItem: React.FC<ConciliationItemProps> = ({
  conciliationName,
}) => {
  return <p>{conciliationName}</p>;
};
