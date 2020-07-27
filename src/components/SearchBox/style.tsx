import styled, { keyframes } from "styled-components";

export const appearAnimation = keyframes`
  0%{
    visibility:hidden;
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    visibility:visible;
    opacity: 1;
  }`;

export const disappearAnimation = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
    visibility: hidden;
    max-width:0px;
  }`;

export const Box = styled.div`
  flex: 3 1 30%;
  visibility: hidden;
  background: var(--white);
  border-radius: 5px;
  margin: 0 15px;
  padding: 15px 10px;
  color: var(--black);
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 19%);
  animation: ${disappearAnimation} 1s ease-in-out forwards;
  &.visible {
    padding: 15px 10px;
    margin: 0 10px;
    animation: ${appearAnimation} 1s ease-in-out forwards;
  }
  hr {
    height: 1px;
    width: 100%;
    margin-top: 4px;
    background: rgb(247 127 0 / 22%);
    border: none;
  }
`;
export const Content = styled.div`
  overflow-y: scroll;
  max-height: 90vh;
  margin: 10px 0;
`;

export const Result = styled.p`
  color: #8a8a8a;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  margin: 0px 0 5px;
  color: var(--orange);
`;
