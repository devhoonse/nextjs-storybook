import type { Meta, StoryObj } from '@storybook/react';

import { SampleButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SampleButton> = {
  title: 'Components/SampleButton',
  component: SampleButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SampleButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
