import { themeCD } from '@mpnx/theme'
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Button from './button'

export default {
  component: Button,
  title: 'Button/Primary',
  color: 'primary',
  kind: 'primary',
  children: 'Click me',
  argTypes: {
    kind: {
      options: ['primary'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'gray', 'warning', 'success', 'error'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: Story = (args) => (
  <ThemeProvider theme={themeCD}>
    <Button {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary',
  color: 'primary',
  children: 'change me',
}
