import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Some text here',
    size: 'lg',
    leading: 'relaxed',
  },
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: {
        type: 'inline-radio',
      },
    },
    leading: {
      options: ['relaxed', 'snug'],
      control: {
        type: 'inline-radio',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const Medium: StoryObj<TextProps> = {
  args: {
    size: 'md',
  },
}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}
export const LeadingRelaxed: StoryObj<TextProps> = {
  args: {
    leading: 'relaxed',
  },
}
export const LeadingSnug: StoryObj<TextProps> = {
  args: {
    leading: 'snug',
  },
}
