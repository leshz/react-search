import * as React from "react";
import { ConciliationItemProps } from "../../interfaces";
const reactStringReplace = require("react-string-replace");
import { Match, Head, Item, Body } from "./styles";
import { useActiveClick } from "../../hooks/activeOnClick";

export const ConciliationItem: React.FC<ConciliationItemProps> = ({
  conciliationName,
  balance,
  selected,
  sourceA,
  sourceB,
  description,
  tags,
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
        {reactStringReplace(conciliationName, selected, (match, i) => (
          <Match key={i}>{match}</Match>
        ))}
      </Head>
      <Body className={`${active.show ? "active" : ""} `}>
        <p>
          balance:
          <span>
            {reactStringReplace(balance, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>
        <p>
          sourceA:
          <span>
            {reactStringReplace(sourceA, selected, (match, i) => (
              <Match key={i}>{match}</Match>
            ))}
          </span>
        </p>

        <p>
          sourceB:
          <span>
            {reactStringReplace(sourceB, selected, (match, i) => (
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
