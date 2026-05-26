import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MovieCard } from './movieCard';

const meta: Meta<typeof MovieCard> = {
  component: MovieCard,
};

export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    title: 'The Quiet Hour',
    year: 2025,
    runtime: '2h 14m',
    rating: 8.4,
    featured: true,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <MovieCard {...args} />
    </div>
  ),
};
