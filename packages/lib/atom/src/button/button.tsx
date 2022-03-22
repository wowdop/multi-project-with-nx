import * as T from './button.type'
import * as S from './button.style'

const Button = ({ children, dataTestid, color }: T.Button) => {
  return (
    <S.Button data-testid={dataTestid} color={color}>
      {children}
    </S.Button>
  )
}

export default Button
