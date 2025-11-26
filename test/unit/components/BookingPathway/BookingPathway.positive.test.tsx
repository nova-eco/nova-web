import { render, screen, waitFor } from '@testing-library/react';
import { BookingPathway } from '@app/pages/BookingPathway/BookingPathway';
import type { BookingPathwayProps } from '@app/pages/BookingPathway/BookingPathwayProps';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('BookingPathway - Positive Tests', () => {
  const mockStartBookingPathway = jest.fn();
  const defaultProps: BookingPathwayProps = {
    nextBookingPathwayRoute: '',
    startBookingPathway: mockStartBookingPathway,
    theme: undefined,
    userId: 'user-123',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component with initialization message', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(screen.getByText('Initializing booking pathway...')).toBeTruthy();
  });

  test('calls startBookingPathway on mount with correct userId', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);
    expect(mockStartBookingPathway).toHaveBeenCalledWith('user-123');
  });

  test('calls startBookingPathway with different userId', () => {
    const props = { ...defaultProps, userId: 'user-456' };
    render(<BookingPathway {...props} />);

    expect(mockStartBookingPathway).toHaveBeenCalledWith('user-456');
  });

  test('navigates when nextBookingPathwayRoute is provided', async () => {
    const props: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/haircuts',
    };

    render(<BookingPathway {...props} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/booking/haircuts');
    });
  });

  test('navigates to different route when provided', async () => {
    const props: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/staff',
    };

    render(<BookingPathway {...props} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/booking/staff');
    });
  });

  test('renders with light theme', () => {
    const props = { ...defaultProps, theme: 'light' as const };
    const { container } = render(<BookingPathway {...props} />);

    const themedContainer = container.querySelector('[data-theme="light"]');
    expect(themedContainer).toBeTruthy();
    expect(themedContainer?.getAttribute('data-theme')).toBe('light');
  });

  test('renders with dark theme', () => {
    const props = { ...defaultProps, theme: 'dark' as const };
    const { container } = render(<BookingPathway {...props} />);

    const themedContainer = container.querySelector('[data-theme="dark"]');
    expect(themedContainer).toBeTruthy();
    expect(themedContainer?.getAttribute('data-theme')).toBe('dark');
  });

  test('renders without theme when theme is undefined', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    // When theme is undefined, the data-theme attribute won't be in DOM
    // but the component should still render
    expect(container.firstChild).toBeTruthy();
    const message = screen.getByText('Initializing booking pathway...');
    expect(message).toBeTruthy();
  });

  test('calls startBookingPathway only once on initial mount', () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);

    // Rerender with same props
    rerender(<BookingPathway {...defaultProps} />);

    // Should still be called only once
    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);
  });

  test('renders container with correct structure', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    const outerDiv = container.firstChild;
    expect(outerDiv).toBeTruthy();

    // Check for nested divs and paragraph
    const allDivs = container.querySelectorAll('div');
    expect(allDivs.length).toBeGreaterThanOrEqual(2);

    const paragraph = container.querySelector('p');
    expect(paragraph).toBeTruthy();
  });

  test('navigates when nextBookingPathwayRoute changes from empty to valid', async () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    expect(mockNavigate).not.toHaveBeenCalled();

    const updatedProps: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/checkout',
    };

    rerender(<BookingPathway {...updatedProps} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/booking/checkout');
    });
  });

  test('navigates when nextBookingPathwayRoute updates to different route', async () => {
    const initialProps: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/haircuts',
    };

    const { rerender } = render(<BookingPathway {...initialProps} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/booking/haircuts');
    });

    mockNavigate.mockClear();

    const updatedProps: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/times',
    };

    rerender(<BookingPathway {...updatedProps} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/booking/times');
    });
  });

  test('handles long userId correctly', () => {
    const longUserId = 'user-' + '0'.repeat(100);
    const props = { ...defaultProps, userId: longUserId };

    render(<BookingPathway {...props} />);

    expect(mockStartBookingPathway).toHaveBeenCalledWith(longUserId);
  });

  test('renders message text correctly', () => {
    render(<BookingPathway {...defaultProps} />);

    const message = screen.getByText('Initializing booking pathway...');
    expect(message.tagName).toBe('P');
  });
});
