import type { Meta, StoryObj } from '@storybook/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageInternal,
  salonImageInternalNotExternal,
  salonImageTypes,
} from '@test/fixtures';
import { SalonCardHeaderImage } from './SalonCardHeaderImage';

const meta: Meta<typeof SalonCardHeaderImage> = {
  title: 'Components/SalonCardHeaderImage',
  component: SalonCardHeaderImage,
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
type Story = StoryObj<typeof SalonCardHeaderImage>;

export const WithExternalImage: Story = {
  args: {
    location: locationWithMap,
    maps,
    salonImages: [salonImageExternal],
    salonImageTypes,
    salonName: 'Bella Salon',
  },
};

export const WithInternalImage: Story = {
  args: {
    location: locationWithMap,
    maps,
    salonImages: [salonImageInternal],
    salonImageTypes,
    salonName: 'Style Studio',
  },
};

export const WithMapFallback: Story = {
  args: {
    location: locationWithMap,
    maps,
    salonImages: [salonImageInternalNotExternal],
    salonImageTypes,
    salonName: 'Cuts & Colors',
  },
};

export const WithFallbackInitial: Story = {
  args: {
    location: locationWithoutMap,
    maps: [],
    salonImages: [],
    salonImageTypes,
    salonName: 'Bella Salon',
  },
};

export const LightTheme: Story = {
  args: {
    location: locationWithMap,
    maps,
    salonImages: [salonImageExternal],
    salonImageTypes,
    salonName: 'Bella Salon',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    location: locationWithMap,
    maps,
    salonImages: [salonImageExternal],
    salonImageTypes,
    salonName: 'Style Studio',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
