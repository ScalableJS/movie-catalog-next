import type { Meta, StoryObj } from '@storybook/react';

import FindMovieSection from '../components/FindMovieSection';
import Size from '../types/Size';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof FindMovieSection> = {
  title: 'Example/FindMovieSection',
  component: FindMovieSection,
  tags: ['autodocs'],
  argTypes: {
    searchValue: {
      control: { type: 'text' },
    },
    searchBy: {
      control: { type: 'text' },
    },
    onUpdateFindMovieSection: {
      action: 'onUpdateFindMovieSection',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FindMovieSection>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    searchValue: 'test',
    searchBy: 'title',
  },
};

export const Secondary: Story = {
  args: {
    searchValue: 'test',
    searchBy: 'title',
  },
};
