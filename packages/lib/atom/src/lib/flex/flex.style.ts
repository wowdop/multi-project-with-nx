import styled from 'styled-components'
import * as T from './flex.type'

const getPaddingMobile = ({ padding = '' }) => {
  let arr = []
  if (Array.isArray(padding)) {
    arr = padding
  } else {
    arr = [padding]
  }

  return arr.map((pad) => `${Math.round((pad * 100) / 14) / 100}rem`).join(' ')
}

const getPaddingTablet = ({ paddingTablet = '' }: { paddingTablet: any }) => {
  let arr: (string | number)[] = []
  if (Array.isArray(paddingTablet)) {
    arr = paddingTablet
  } else if (Number(paddingTablet) === +paddingTablet) {
    arr = [paddingTablet]
  } else {
    arr = []
  }

  return arr.length
    ? `padding ${arr
        .map((pad) => `${Math.round(Number(pad) / 14)}rem`)
        .join(' ')}`
    : ''
}

export const Flex = styled.div<T.FlexStyle>`
  width: 100%;
  ${({ height }) => height && `height: ${height}`};
  ${({ position }) => position && `position: ${position}; inset: 0;`};
  display: flex;
  gap: ${({ gap = 0 }) => gap / 16}rem;

  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};

  padding: ${getPaddingMobile};
  flex-direction: ${({ direction = 'column' }) =>
    direction === 'column' ? direction : 'row'};

  @media screen and (min-width: 48rem) {
    flex-direction: ${({ direction = 'row' }) =>
      direction === 'row' ? direction : 'column'};
    ${getPaddingTablet};
  }
`
