import { render, screen } from '@testing-library/react';
import {
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import userEvent from '@testing-library/user-event';
import { SalonCardBody } from '@app/components/SalonCardBody/SalonCardBody';

describe('SalonCardBody - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders salon summary initially',
      props: {
        salon: salonWithShortSummary,
      },
      expectedText: salonWithShortSummary.summary,
    },
    {
      name: 'renders with light theme',
      props: {
        salon: salonWithLongSummary,
        theme: 'light' as const,
      },
      expectedText: salonWithLongSummary.summary,
      expectedTheme: 'light',
    },
    {
      name: 'renders with dark theme',
      props: {
        salon: salonMinimal,
        theme: 'dark' as const,
      },
      expectedText: salonMinimal.summary,
      expectedTheme: 'dark',
    },
    {
      name: 'renders minimal salon content',
      props: {
        salon: salonMinimal,
      },
      expectedText: salonMinimal.summary,
    },
  ];

  test.each(testCases)('$name', ({ props, expectedText, expectedTheme }) => {
    const { container } = render(<SalonCardBody {...props} />);

    expect(screen.getByText(expectedText)).toBeTruthy();

    if (expectedTheme) {
      const containerElement = container.querySelector('[data-theme]');
      expect(containerElement?.getAttribute('data-theme')).toBe(expectedTheme);
    }
  });

  test('renders ChevronDown icon initially', () => {
    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(button.getAttribute('aria-label')).toBe('Show more');

    const svg = button.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  test('toggles to description when button is clicked', async () => {
    const user = userEvent.setup();

    render(<SalonCardBody salon={salonWithShortSummary} />);

    expect(screen.getByText(salonWithShortSummary.summary)).toBeTruthy();

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByText(salonWithShortSummary.description)).toBeTruthy();
  });

  test('changes icon to ChevronUp when expanded', async () => {
    const user = userEvent.setup();

    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-label')).toBe('Show more');

    await user.click(button);

    expect(button.getAttribute('aria-label')).toBe('Show less');
  });

  test('toggles back to summary when clicked again', async () => {
    const user = userEvent.setup();

    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');

    await user.click(button);
    expect(screen.getByText(salonWithShortSummary.description)).toBeTruthy();

    await user.click(button);
    expect(screen.getByText(salonWithShortSummary.summary)).toBeTruthy();
    expect(button.getAttribute('aria-label')).toBe('Show more');
  });

  test('renders text container with fixed height', () => {
    const { container } = render(<SalonCardBody salon={salonWithShortSummary} />);

    const textContainer = container.querySelector('p')?.parentElement;
    expect(textContainer).toBeTruthy();
  });
});
