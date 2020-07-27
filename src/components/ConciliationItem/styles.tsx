import styled from "styled-components";

export const Match = styled.b`
  background: var(--yellow);
`;
export const Head = styled.div`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
  transition: background 0.8s ease-in-out, color 0.8s ease-in-out;

  &.active {
    background: var(--black);
    color: var(--white);
  }
`;
export const Item = styled.div`
  border: 1px solid var(--yellow);
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Body = styled.div`
  margin-left: 5px;
  max-height: 0;
  overflow: hidden;
  padding: 0;

  transition: max-height 0.8s ease-in-out, padding 0.8s ease-in-out;
  &.active {
    padding: 10px;
    max-height: 500px;
  }
  & p {
    font-weight: bold;
    margin-bottom: 5px;
  }
  & span {
    margin: 0 0 0 10px;
  }
`;
