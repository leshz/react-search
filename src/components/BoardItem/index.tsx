import * as React from "react";
import { BoardItemProps } from "../../interfaces";
import { Body, Head, Item, Match } from "./styles";
import { useActiveClick } from "../../hooks/activeOnClick";
const reactStringReplace = require("react-string-replace");

export const BoardItem: React.FC<BoardItemProps> = ({
  dashboardName,
  selected,
  visualType,
  description,
  visuals,
  tags,
}) => {
  const active = useActiveClick();
  const tagsAsString = tags.join(" , ");
  const visualToString = visuals.join(" , ");
  let visualTypeToString = visualType.map((item) => item.name);
  const types = visualTypeToString.join(" , ");
  console.log(visualTypeToString);
  return (
    <Item>
      <Head
        className={`${active.show ? "active" : ""} `}
        onClick={active.onClick}
      >
        {reactStringReplace(dashboardName, selected, (match, i) => (
          <Match key={i}>{match}</Match>
        ))}
      </Head>
      <Body className={`${active.show ? "active" : ""} `}>
        <p>
          visualType:
          <span>
            {reactStringReplace(types, selected, (match, i) => (
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
