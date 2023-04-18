import type { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from '../components/ToggleSwitch';
import Size from '../types/Size';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ToggleSwitch> = {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    labelA: {
      control: { type: 'text' },
    },
    labelB: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'SORT BY',
    labelA: 'RELEASE DATE',
    labelB: 'RATING',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    labelA: 'RELEASE DATE',
    labelB: 'RATING',
  },
};
