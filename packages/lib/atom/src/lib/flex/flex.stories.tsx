import { themeCD } from '@mpnx/theme'
import { Story, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../button'
import Flex from './flex'

export default {
  component: Flex,
  title: 'Flex',
  argTypes: {
    gap: {
      control: { type: 'number' },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'radio' },
    },
  },
} as Meta

const Template: Story = (args) => (
  <ThemeProvider theme={themeCD}>
    <Flex {...args}>
      <h1>Learn to count to 5 in Romanian</h1>
      <h2>Invata sa numeri pana la 5 in Romana</h2>
    </Flex>

    <Flex {...args}>
      <Button>one 1 unu</Button>
      <Button>two 2 doi</Button>
      <Button>three 3 trei</Button>
      <Button>four 4 patru</Button>
      <Button>five 5 cinci</Button>
    </Flex>
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  direction: 'row',
  gap: 12,
}
