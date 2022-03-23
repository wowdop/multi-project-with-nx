import * as S from './flex.style'
import * as T from './flex.type'

const Flex = ({
  children,
  position,
  direction,
  padding,
  paddingTablet,
  gap,
  align,
  justify,
  height,
}: T.Flex) => {
  return (
    <S.Flex
      alignItems={align}
      justify={justify}
      position={position}
      direction={direction}
      padding={padding}
      paddingTablet={paddingTablet}
      gap={gap}
      height={height}
    >
      {children}
    </S.Flex>
  )
}

Flex.defaultProps = T.defaultProps

export default Flex
