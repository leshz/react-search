import * as React from "react";
import { UserItemProps } from "../../interfaces";
const reactStringReplace = require("react-string-replace");
import { Match, Head, Item, Body, Profile } from "./styles";
import { useActiveClick } from "../../hooks/activeOnClick";

export const UserItem: React.FC<UserItemProps> = ({
  name,
  gender,
  tags,
  selected,
  email,
  picture,
  company,
  age,
  phone,
  address,
}) => {
  let tagsAsString = tags.join(" , ");
  const active = useActiveClick();
  return (
    <Item>
      <Head
        className={`${active.show ? "active" : ""} `}
        onClick={active.onClick}
      >
        {reactStringReplace(name.firstName, selected, (match, i) => (
          <Match key={i}>{match}</Match>
        ))}{" "}
        {reactStringReplace(name.lastName, selected, (match, i) => (
          <Match key={i}>{match}</Match>
        ))}
      </Head>
      <Body className={`${active.show ? "active" : ""} `}>
        <Profile src={picture} alt="imaagen profile" />
        <p>
          gender:
          <span>
            {reactStringReplace(gender, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          email:
          <span>
            {reactStringReplace(email, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          company:
          <span>
            {reactStringReplace(company, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          age:
          <span>
            {reactStringReplace(age, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          phone:
          <span>
            {reactStringReplace(phone, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          address:
          <span>
            {reactStringReplace(address, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          tags:
          <span>
            {reactStringReplace(tagsAsString, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
      </Body>
    </Item>
  );
};
