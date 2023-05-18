import styled from "styled-components";

export const Parent = styled.div``;
export const Children = styled.div`
  opacity: ${(props) => props.opacity};
  font-size: 2rem;
`;

export const StickyContainer = styled.nav`
  width: 100%;
  height: 100rem;
  background-color: tomato;
  margin-bottom: 30rem;
`;

export const Sticky = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 40rem;
  background-color: green;
  top: 0;
`;
