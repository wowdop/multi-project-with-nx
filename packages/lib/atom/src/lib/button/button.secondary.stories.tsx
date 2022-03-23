import { themeCD } from '@mpnx/theme'
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Button from './button'

export default {
  component: Button,
  title: 'Button/Secondary',
  color: 'primary',
  kind: 'primary',
  children: 'Click me',
  argTypes: {
    kind: {
      options: ['secondary'],
      control: { type: 'radio' },
    },
    color: {
      options: ['blueGray', 'rose', 'blue'],
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

export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary',
  color: 'blue',
  children: 'change me',
}
