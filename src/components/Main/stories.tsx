import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta

export const Secondary: Story = () => (
  <Main title={text('Title', 'React Avançado')} />
)
