import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageTypes,
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import { SalonCard } from './SalonCard';

const meta: Meta<typeof SalonCard> = {
  title: 'Components/SalonCard',
  component: SalonCard,
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
  args: {
    setSalonId: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof SalonCard>;

const defaultArgs = {
  locations: [locationWithMap, locationWithoutMap],
  maps,
  salonImages: [salonImageExternal],
  salonImageTypes,
};

export const ShortSummary: Story = {
  args: {
    ...defaultArgs,
    salon: salonWithShortSummary,
  },
};

export const LongSummary: Story = {
  args: {
    ...defaultArgs,
    salon: salonWithLongSummary,
  },
};

export const Minimal: Story = {
  args: {
    ...defaultArgs,
    salon: salonMinimal,
  },
};

export const LightTheme: Story = {
  args: {
    ...defaultArgs,
    salon: salonWithShortSummary,
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    ...defaultArgs,
    salon: salonWithLongSummary,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithoutImage: Story = {
  args: {
    ...defaultArgs,
    salon: salonMinimal,
    salonImages: [],
  },
};
