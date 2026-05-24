import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useSearchShortcut } from '@/hooks/useSearchShortcut';

import { SearchInput } from './searchInput';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search films, people, collections…',
  },
};

export const WithKeyboardShortcut: Story = {
  args: {
    placeholder: 'Search…',
  },
  render: (args) => {
    const ref = useSearchShortcut<HTMLInputElement>();
    return <SearchInput ref={ref} {...args} />;
  },
};
