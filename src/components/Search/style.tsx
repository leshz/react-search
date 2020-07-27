import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 90%;
  max-width: 640px;
  justify-content: center;
`;

export const InputWrap = styled.div`
  width: 100%;
  background: var(--white);
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid var(--orange);
  color: #fff;
  border-radius: 5px;
  overflow: hidden;
  &.error {
    border: 1px solid var(--red);
    color: var(--red);
    box-shadow: 0px 0px 5px 3px var(--red);
  }
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  line-height: 2;
  padding: 2px 5px;
  width: 100%;
  border: 2px solid transparent;
  background: transparent;
  color: var(--black);
  &::placeholder {
    color: var(--gray);
  }
`;

export const ButtonInput = styled.button`
  background: var(--white);
  padding: 0px 5px;
  border: 1px solid transparent;
  color: var(--gray);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--orange);
  }
  &:focus {
    background: var(--black);
  }
  &.active {
    color: var(--orange);
    background: var(--white);
  }
`;
export const Button = styled.button`
  padding: 0px 15px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  color: var(--orange);
  background: var(--black);
  &:hover {
    background: var(--orange);
    color: var(--white);
  }
  &:focus {
    background: var(--orange);
    color: var(--white);
  }
`;

export const Description = styled.p`
  text-align: center;
  margin: 15px;
  color: var(--black);
  opacity: 0.8;
`;

export const Errors = styled(Description)`
  margin: 5px 0;
  color: var(--red);
  width: 100%;
`;
