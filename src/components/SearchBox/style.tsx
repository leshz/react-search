import styled from "styled-components";

export const Box = styled.div`
  flex-basis: 25%;
  background: red;
  opacity: 0.2;
  color: #fff;
  &:nth-last-child(2n) {
    background: blue;
  }
`;
