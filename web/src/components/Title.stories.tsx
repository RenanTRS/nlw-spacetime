import { Meta, StoryObj } from '@storybook/react'
import { Title, TitleProps } from './Title'
export default {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: 'Some text here',
  },
} as Meta<TitleProps>

export const Defaut: StoryObj<TitleProps> = {}
