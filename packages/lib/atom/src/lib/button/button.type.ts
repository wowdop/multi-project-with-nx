import { ReactNode } from 'react'

export interface ButtonStyle {
  dataTestid?: string
  color?: string
  kind?: string
}

export interface Button extends ButtonStyle {
  children?: ReactNode
}
