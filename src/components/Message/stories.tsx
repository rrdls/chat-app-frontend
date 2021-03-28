import { Story, Meta } from '@storybook/react/types-6-0'
import Message from '.'

export default {
  title: 'Message',
  component: Message
} as Meta

export const Default: Story = () => <Message />
