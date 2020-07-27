import * as React from "react";
import { UserItemProps } from "../../interfaces";

export const UserItem: React.FC<UserItemProps> = ({ name, gender }) => {
  return <p>{name.firstName}</p>;
};
