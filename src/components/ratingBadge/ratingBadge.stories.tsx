import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RatingBadge } from './ratingBadge';

const meta: Meta<typeof RatingBadge> = {
  component: RatingBadge,
};

export default meta;

type Story = StoryObj<typeof RatingBadge>;

export const Default: Story = {
  args: {
    value: 9,
    denom: '10',
    variant: 'pill',
    dot: true,
  },
};
