import * as React from "react";
import { SourceItemProps } from "../../interfaces";
const reactStringReplace = require("react-string-replace");
import { Match, Head, Item, Body } from "./styles";
import { useActiveClick } from "../../hooks/activeOnClick";

export const SourceItem: React.FC<SourceItemProps> = ({
  name,
  company,
  tags,
  selected,
  description,
  timestamp,
}) => {
  let tagsAsString = tags.join(" , ");
  const active = useActiveClick();
  return (
    <Item>
      <Head
        className={`${active.show ? "active" : ""} `}
        onClick={active.onClick}
      >
        {reactStringReplace(name, selected, (match, i) => (
          <Match key={i}>{match}</Match>
        ))}
      </Head>
      <Body className={`${active.show ? "active" : ""} `}>
        <p>
          company:
          <span>
            {reactStringReplace(company, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          description:
          <span>
            {reactStringReplace(description, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          create at:
          <span>
            {reactStringReplace(timestamp.createdAt, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          update at:
          <span>
            {reactStringReplace(timestamp.updateAt, selected, (match, i) => (
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
