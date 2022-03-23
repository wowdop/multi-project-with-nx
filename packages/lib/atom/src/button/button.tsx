import * as T from './button.type'
import * as S from './button.style'

const Button = ({ children, dataTestid, color, kind }: T.Button) => {
  return (
    <S.Button data-testid={dataTestid} color={color} kind={kind}>
      {children}
    </S.Button>
  )
}

export default Button
