import type { Meta, StoryObj } from '@storybook/react';

import Page from './page';

const meta = {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
