import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'hello@reel.app',
    hint: "We'll never share this.",
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    type: 'password',
    error: 'At least 8 characters.',
  },
};
