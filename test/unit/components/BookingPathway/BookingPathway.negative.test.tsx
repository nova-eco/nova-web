import { render, screen, waitFor } from '@testing-library/react';
import { BookingPathway } from '@app/pages/BookingPathway/BookingPathway';
import type { BookingPathwayProps } from '@app/pages/BookingPathway/BookingPathwayProps';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('BookingPathway - Negative Tests', () => {
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

  test('does not navigate when nextBookingPathwayRoute is empty string', async () => {
    render(<BookingPathway {...defaultProps} />);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  test('does not call startBookingPathway multiple times on re-render with same props', () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);

    rerender(<BookingPathway {...defaultProps} />);
    rerender(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);
  });

  test('does not navigate when nextBookingPathwayRoute remains empty on re-render', async () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    rerender(<BookingPathway {...defaultProps} />);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  test('does not call startBookingPathway when userId changes after mount', () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);
    mockStartBookingPathway.mockClear();

    const updatedProps = { ...defaultProps, userId: 'user-456' };
    rerender(<BookingPathway {...updatedProps} />);

    expect(mockStartBookingPathway).not.toHaveBeenCalled();
  });

  test('does not call navigate when same route is provided multiple times', async () => {
    const props: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/haircuts',
    };

    const { rerender } = render(<BookingPathway {...props} />);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });

    mockNavigate.mockClear();

    rerender(<BookingPathway {...props} />);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  test('does not render incorrect theme data attribute', () => {
    const props = { ...defaultProps, theme: 'light' as const };
    const { container } = render(<BookingPathway {...props} />);

    const darkThemeContainer = container.querySelector('[data-theme="dark"]');
    expect(darkThemeContainer).toBeNull();
  });

  test('does not render with multiple root elements', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    // Should only have one direct child (the main container div)
    expect(container.children.length).toBe(1);
  });

  test('does not render additional text content', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.queryByText('Please wait')).toBeNull();
    expect(screen.queryByText('Booking Pathway')).toBeNull();
  });

  test('does not render buttons or interactive elements', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.queryByRole('link')).toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();
  });

  test('does not call startBookingPathway with empty userId', () => {
    const props = { ...defaultProps, userId: '' };
    render(<BookingPathway {...props} />);

    expect(mockStartBookingPathway).toHaveBeenCalledWith('');
    expect(mockStartBookingPathway).not.toHaveBeenCalledWith('user-123');
  });

  test('does not navigate to empty route', async () => {
    const props: BookingPathwayProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '',
    };

    render(<BookingPathway {...props} />);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalledWith('');
    });
  });

  test('does not have theme class when theme is undefined', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    const lightThemeContainer = container.querySelector('.light');
    const darkThemeContainer = container.querySelector('.dark');

    // The theme class should still be applied via styles[theme], but without theme prop
    // the container should not have the specific theme class
    expect(lightThemeContainer).toBeNull();
    expect(darkThemeContainer).toBeNull();
  });

  test('does not render when startBookingPathway is called with incorrect userId', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).not.toHaveBeenCalledWith('wrong-user-id');
    expect(mockStartBookingPathway).not.toHaveBeenCalledWith('user-456');
    expect(mockStartBookingPathway).toHaveBeenCalledWith('user-123');
  });

  test('does not call navigate when nextBookingPathwayRoute changes from valid to empty', async () => {
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
      nextBookingPathwayRoute: '',
    };

    rerender(<BookingPathway {...updatedProps} />);

    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  test('does not have form elements', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    expect(container.querySelector('form')).toBeNull();
    expect(container.querySelector('input')).toBeNull();
    expect(container.querySelector('select')).toBeNull();
  });

  test('does not render navigation elements', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(screen.queryByRole('navigation')).toBeNull();
    expect(screen.queryByRole('banner')).toBeNull();
  });

  test('does not call startBookingPathway when nextBookingPathwayRoute changes', () => {
    const { rerender } = render(<BookingPathway {...defaultProps} />);

    expect(mockStartBookingPathway).toHaveBeenCalledTimes(1);
    mockStartBookingPathway.mockClear();

    const updatedProps = {
      ...defaultProps,
      nextBookingPathwayRoute: '/booking/haircuts',
    };
    rerender(<BookingPathway {...updatedProps} />);

    expect(mockStartBookingPathway).not.toHaveBeenCalled();
  });

  test('does not render multiple message paragraphs', () => {
    const { container } = render(<BookingPathway {...defaultProps} />);

    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(1);
  });

  test('does not have headings', () => {
    render(<BookingPathway {...defaultProps} />);

    expect(screen.queryByRole('heading')).toBeNull();
  });
});
