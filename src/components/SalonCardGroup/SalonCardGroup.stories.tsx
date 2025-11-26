import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import {
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import { store } from '@app/store';
import { SalonCardGroup } from './SalonCardGroup';

const meta: Meta<typeof SalonCardGroup> = {
  title: 'Components/SalonCardGroup',
  component: SalonCardGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme for the component',
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SalonCardGroup>;

export const MultipleSalons: Story = {
  args: {
    salons: [salonWithShortSummary, salonWithLongSummary, salonMinimal],
  },
};

export const SingleSalon: Story = {
  args: {
    salons: [salonWithShortSummary],
  },
};

export const TwoSalons: Story = {
  args: {
    salons: [salonWithShortSummary, salonMinimal],
  },
};

export const Empty: Story = {
  args: {
    salons: [],
  },
};

export const LightTheme: Story = {
  args: {
    salons: [salonWithShortSummary, salonWithLongSummary],
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    salons: [salonWithShortSummary, salonWithLongSummary],
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const ManySalons: Story = {
  args: {
    salons: [
      salonWithShortSummary,
      salonWithLongSummary,
      salonMinimal,
      { ...salonWithShortSummary, id: 'salon-4', name: 'Fourth Salon' },
      { ...salonWithLongSummary, id: 'salon-5', name: 'Fifth Salon' },
    ],
  },
};
