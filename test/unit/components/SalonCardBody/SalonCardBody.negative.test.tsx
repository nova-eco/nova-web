import { render, screen } from '@testing-library/react';
import { salonWithLongSummary, salonWithShortSummary } from '@test/fixtures';
import userEvent from '@testing-library/user-event';
import { SalonCardBody } from '@app/components/SalonCardBody/SalonCardBody';

describe('SalonCardBody - Negative Tests', () => {
  const testCases = [
    {
      name: 'does not render description initially',
      props: {
        salon: salonWithShortSummary,
      },
      shouldNotFind: salonWithShortSummary.description,
    },
    {
      name: 'does not render description for different salon initially',
      props: {
        salon: salonWithLongSummary,
      },
      shouldNotFind: salonWithLongSummary.description,
    },
  ];

  test.each(testCases)('$name', ({ props, shouldNotFind }) => {
    render(<SalonCardBody {...props} />);

    expect(screen.queryByText(shouldNotFind)).toBeNull();
  });

  test('does not have "Show less" aria-label initially', () => {
    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-label')).not.toBe('Show less');
  });

  test('does not render summary when expanded', async () => {
    const user = userEvent.setup();

    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.queryByText(salonWithShortSummary.summary)).toBeNull();
  });

  test('does not have "Show more" aria-label when expanded', async () => {
    const user = userEvent.setup();

    render(<SalonCardBody salon={salonWithShortSummary} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(button.getAttribute('aria-label')).not.toBe('Show more');
  });

  test('does not render without required salon prop', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<SalonCardBody salon={undefined as any} />);
    }).toThrow();

    consoleSpy.mockRestore();
  });
});
