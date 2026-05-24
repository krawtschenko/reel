import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: 'lg',
    disabled: false,
    label: 'Switch',
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onCheckedChange={setChecked} label={checked ? 'On' : 'Off'} />;
  },
};
