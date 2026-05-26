import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ActorCard } from './actorCard';

const meta: Meta<typeof ActorCard> = {
  component: ActorCard,
};

export default meta;

type Story = StoryObj<typeof ActorCard>;

export const Default: Story = {
  args: {
    name: 'Mara Halloran',
    role: 'Eleanor',
  },
};
