import type { PageHeaderProps } from '@app/components/PageHeader/PageHeaderProps';

export interface PageHeaderTestCase {
  name: string;
  props: PageHeaderProps;
  expectedTitle: string;
  expectedSubtitle?: string | null;
  expectedTheme?: string;
}

export const pageHeaderPositiveTestCases: PageHeaderTestCase[] = [
  {
    name: 'renders with title only',
    props: {
      title: 'Welcome to Nova',
    },
    expectedTitle: 'Welcome to Nova',
    expectedSubtitle: null,
  },
  {
    name: 'renders with title and subtitle',
    props: {
      title: 'Dashboard',
      subtitle: 'View your bookings and appointments',
    },
    expectedTitle: 'Dashboard',
    expectedSubtitle: 'View your bookings and appointments',
  },
  {
    name: 'renders with light theme',
    props: {
      title: 'Settings',
      subtitle: 'Manage your preferences',
      theme: 'light' as const,
    },
    expectedTitle: 'Settings',
    expectedSubtitle: 'Manage your preferences',
    expectedTheme: 'light',
  },
  {
    name: 'renders with dark theme',
    props: {
      title: 'Profile',
      subtitle: 'Update your information',
      theme: 'dark' as const,
    },
    expectedTitle: 'Profile',
    expectedSubtitle: 'Update your information',
    expectedTheme: 'dark',
  },
  {
    name: 'renders with long title',
    props: {
      title: 'This is a very long page title that should still render correctly',
      subtitle: 'With a subtitle',
    },
    expectedTitle: 'This is a very long page title that should still render correctly',
    expectedSubtitle: 'With a subtitle',
  },
  {
    name: 'renders with long subtitle',
    props: {
      title: 'Page',
      subtitle:
        'This is a very long subtitle that provides detailed information about the page content',
    },
    expectedTitle: 'Page',
    expectedSubtitle:
      'This is a very long subtitle that provides detailed information about the page content',
  },
  {
    name: 'renders with special characters in title',
    props: {
      title: 'Welcome! @#$%^&*()',
    },
    expectedTitle: 'Welcome! @#$%^&*()',
  },
  {
    name: 'renders with special characters in subtitle',
    props: {
      title: 'Title',
      subtitle: 'Subtitle with & special < characters >',
    },
    expectedTitle: 'Title',
    expectedSubtitle: 'Subtitle with & special < characters >',
  },
  {
    name: 'renders with numbers in title',
    props: {
      title: 'Page 123',
    },
    expectedTitle: 'Page 123',
  },
  {
    name: 'renders with numbers in subtitle',
    props: {
      title: 'Stats',
      subtitle: 'You have 42 bookings',
    },
    expectedTitle: 'Stats',
    expectedSubtitle: 'You have 42 bookings',
  },
  {
    name: 'renders with Unicode characters',
    props: {
      title: 'Welcome 欢迎 🎉',
      subtitle: 'Bienvenue مرحبا',
    },
    expectedTitle: 'Welcome 欢迎 🎉',
    expectedSubtitle: 'Bienvenue مرحبا',
  },
];
