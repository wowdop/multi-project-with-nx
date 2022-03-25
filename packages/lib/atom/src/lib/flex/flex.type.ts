import { ReactNode } from 'react'

export interface FlexStyle {
  position?: string
  direction?: string
  padding: string | number
  paddingTablet: string | number
  gap?: number
  align?: string
  alignItems?: string
  justify?: string
  height?: string
}

export interface Flex extends FlexStyle {
  children?: ReactNode
}

export const defaultProps = {
  padding: '',
  paddingTablet: '',
}
