import type { Meta, StoryObj } from '@storybook/react';

import Menu from '@/components/Header/Menu/Menu';

const meta = {
  title: 'Header',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopMenu: Story = {};
