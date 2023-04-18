import type {Meta, StoryObj} from '@storybook/react';

import SearchItem from '../components/SearchItem';
import Size from "../types/Size";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SearchItem> = {
    title: 'Example/SearchItem',
    component: SearchItem,
    tags: ['autodocs'],
    argTypes: {
        primary: {
            control: {type: 'boolean'},
        },
        label: {
            control: {type: 'text'},
        },
        size: {
            control: {type: 'select'},
        },
    }
};

export default meta;
type Story = StoryObj<typeof SearchItem>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Search',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Search',
    },
};

export const Large: Story = {
    args: {
        size: Size.large,
        label: 'Search',
    },
};

export const Medium: Story = {
    args: {
        size: Size.medium,
        label: 'Search',
    },
};

export const Small: Story = {
    args: {
        size: Size.small,
        label: 'Search',
    },
};
