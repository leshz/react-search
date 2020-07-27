import * as React from "react";
import { BoardItemProps } from "../../interfaces";

export const BoardItem: React.FC<BoardItemProps> = ({ dashboardName }) => {
  return <p>{dashboardName}</p>;
};
