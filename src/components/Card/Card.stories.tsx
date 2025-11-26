import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card',
  },
};

export const WithText: Story = {
  args: {
    children: 'This is a card with some text content.',
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <h3>Card Title</h3>
        <p>This card contains multiple elements including a heading and paragraph.</p>
        <button>Click Me</button>
      </>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: null,
  },
};
