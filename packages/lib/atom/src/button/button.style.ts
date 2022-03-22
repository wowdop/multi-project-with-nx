import styled from 'styled-components'

import * as T from './button.type'

export const Button = styled.button<T.ButtonStyle>`
  padding: 0.75rem 1.5rem;
  color: ${({ color }) => color};
`
