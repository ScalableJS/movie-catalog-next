import type { Meta, StoryObj } from '@storybook/react';

import InputItem from '../components/InputItem';
import Size from '../types/Size';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof InputItem> = {
  title: 'Example/InputItem',
  component: InputItem,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    onChange: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputItem>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

export const Large: Story = {
  args: {
    size: Size.large,
  },
};

export const Medium: Story = {
  args: {
    size: Size.medium,
  },
};

export const Small: Story = {
  args: {
    size: Size.small,
  },
};
