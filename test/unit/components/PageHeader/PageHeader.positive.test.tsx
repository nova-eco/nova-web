import { render, screen } from '@testing-library/react';
import { pageHeaderPositiveTestCases } from '@test/fixtures';
import { PageHeader } from '@app/components/PageHeader/PageHeader';

describe('PageHeader - Positive Tests', () => {
  test.each(pageHeaderPositiveTestCases)(
    '$name',
    ({ props, expectedTitle, expectedSubtitle, expectedTheme }) => {
      const { container } = render(<PageHeader {...props} />);

      // Check title
      const title = screen.getByText(expectedTitle);
      expect(title).toBeTruthy();
      expect(title.tagName).toBe('H1');

      // Check subtitle
      if (expectedSubtitle) {
        const subtitle = screen.getByText(expectedSubtitle);
        expect(subtitle).toBeTruthy();
        expect(subtitle.tagName).toBe('H3');
      }

      // Check theme
      if (expectedTheme) {
        const themedContainer = container.querySelector('[data-theme]');
        expect(themedContainer?.getAttribute('data-theme')).toBe(expectedTheme);
      }
    },
  );

  test('renders header element', () => {
    const { container } = render(<PageHeader title="Test" />);

    const header = container.querySelector('header');
    expect(header).toBeTruthy();
  });

  test('title is rendered as h1 element', () => {
    const { container } = render(<PageHeader title="Styled Title" />);

    const title = screen.getByText('Styled Title');
    expect(title.tagName).toBe('H1');
  });

  test('subtitle is rendered as h3 element', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Styled Subtitle" />);

    const subtitle = screen.getByText('Styled Subtitle');
    expect(subtitle.tagName).toBe('H3');
  });

  test('renders with empty string subtitle', () => {
    const { container } = render(<PageHeader title="Title" subtitle="" />);

    // Empty subtitle should not render
    const subtitles = container.querySelectorAll('h3');
    expect(subtitles.length).toBe(0);
  });

  test('renders multiple instances independently', () => {
    const { container: container1 } = render(<PageHeader title="First Header" />);
    const { container: container2 } = render(<PageHeader title="Second Header" />);

    expect(screen.getByText('First Header')).toBeTruthy();
    expect(screen.getByText('Second Header')).toBeTruthy();
  });

  test('header contains both title and subtitle elements when subtitle provided', () => {
    const { container } = render(
      <PageHeader title="Main Title" subtitle="Supporting Subtitle" />,
    );

    const header = container.querySelector('header');
    const title = header?.querySelector('h1');
    const subtitle = header?.querySelector('h3');

    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
    expect(title?.textContent).toBe('Main Title');
    expect(subtitle?.textContent).toBe('Supporting Subtitle');
  });

  test('subtitle appears after title in DOM order', () => {
    const { container } = render(
      <PageHeader title="Title First" subtitle="Subtitle Second" />,
    );

    const header = container.querySelector('header');
    const children = header?.children;

    expect(children?.length).toBe(2);
    expect(children?.[0].tagName).toBe('H1');
    expect(children?.[1].tagName).toBe('H3');
  });

  test('renders with only title when subtitle is undefined', () => {
    const { container } = render(<PageHeader title="Just Title" subtitle={undefined} />);

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1).toBeTruthy();
    expect(h3).toBeNull();
  });

  test('renders title text content correctly', () => {
    render(<PageHeader title="Exact Title Text" />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe('Exact Title Text');
  });

  test('renders subtitle text content correctly', () => {
    render(<PageHeader title="Title" subtitle="Exact Subtitle Text" />);

    const subtitle = screen.getByRole('heading', { level: 3 });
    expect(subtitle.textContent).toBe('Exact Subtitle Text');
  });
});
