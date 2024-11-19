import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '@/components/Navbar';

const meta = {
  title: 'Home/Header/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
