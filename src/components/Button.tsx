import styled from "styled-components";

export const Button = styled.button`
  color: var(--color-text);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  line-height: 2.5;
  border: none;
  cursor: pointer;
`