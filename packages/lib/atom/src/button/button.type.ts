import { ReactNode } from 'react'

export interface ButtonStyle {
  dataTestid?: string
  color?: string
}

export interface Button extends ButtonStyle {
  children?: ReactNode
}
