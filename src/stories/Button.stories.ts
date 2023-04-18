import type { Meta, StoryObj } from '@storybook/react';

import ButtonItem from '../components/ButtonItem';
import Size from '../types/Size';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ButtonItem> = {
  title: 'Example/ButtonItem',
  component: ButtonItem,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonItem>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: Size.large,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: Size.small,
    label: 'Button',
  },
};
