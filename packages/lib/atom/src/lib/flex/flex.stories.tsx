import { Story, Meta } from '@storybook/react'
import { Flex } from './flex'

export default {
  component: Flex,
  title: 'Flex',
} as Meta

const Template: Story = (args) => <Flex {...args} />

export const Primary = Template.bind({})
Primary.args = {}
