import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Clock8 } from 'lucide-react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Watched',
    icon: Clock8,
  },
};
