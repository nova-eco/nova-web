import type { Meta, StoryObj } from '@storybook/react';
import {
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import { SalonCardBody } from './SalonCardBody';

const meta: Meta<typeof SalonCardBody> = {
  title: 'Components/SalonCardBody',
  component: SalonCardBody,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme for the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SalonCardBody>;

export const ShortSummary: Story = {
  args: {
    salon: salonWithShortSummary,
  },
};

export const LongSummary: Story = {
  args: {
    salon: salonWithLongSummary,
  },
};

export const Minimal: Story = {
  args: {
    salon: salonMinimal,
  },
};

export const LightTheme: Story = {
  args: {
    salon: salonWithShortSummary,
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    salon: salonWithLongSummary,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
