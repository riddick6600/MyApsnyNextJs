import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '@/components/Header/Navbar/Navbar';

const meta = {
  title: 'Header',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopNavBar: Story = {};
