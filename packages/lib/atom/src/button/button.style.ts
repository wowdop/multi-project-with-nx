import styled from 'styled-components'

import * as T from './button.type'

export const Button = styled.button<T.ButtonStyle>`
  padding: 0.75rem 1.5rem;
  color: ${({ color = 'primary', theme, kind = 'primary' }) =>
    theme.color[kind][color].c700};
  background-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
    theme.color[kind][color].c100};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
    theme.color[kind][color].c200};
  border-radius: 0.5rem;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c800};
    background-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c200};
    border-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c300};
  }

  &:focus {
    color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c800};
    outline: 4px solid
      ${({ color = 'primary', theme, kind = 'primary' }) =>
        theme.color[kind][color].c500}25;
    background-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c200};
    border-color: ${({ color = 'primary', theme, kind = 'primary' }) =>
      theme.color[kind][color].c300};
  }
`
