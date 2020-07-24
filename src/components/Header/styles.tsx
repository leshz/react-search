import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;

  & h1 {
    color: var(--white);
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  margin: 0 10px;
`;

export { Header, Ul, Li };
