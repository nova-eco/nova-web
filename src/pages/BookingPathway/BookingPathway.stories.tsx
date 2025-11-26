import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fn } from '@storybook/test';
import { BookingPathway } from './BookingPathway';

const meta: Meta<typeof BookingPathway> = {
  title: 'Pages/BookingPathway',
  component: BookingPathway,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme for the component',
    },
  },
  args: {
    startBookingPathway: fn(),
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BookingPathway>;

export const Default: Story = {
  args: {
    nextBookingPathwayRoute: '',
    userId: 'user-123',
  },
};

export const WithNextRoute: Story = {
  args: {
    nextBookingPathwayRoute: '/booking/haircuts',
    userId: 'user-123',
  },
};

export const LightTheme: Story = {
  args: {
    nextBookingPathwayRoute: '',
    userId: 'user-456',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    nextBookingPathwayRoute: '',
    userId: 'user-789',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
