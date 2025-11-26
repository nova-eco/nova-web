import { render, screen } from '@testing-library/react';
import { PageHeader } from '@app/components/PageHeader/PageHeader';

describe('PageHeader - Negative Tests', () => {
  test('does not render subtitle when subtitle is not provided', () => {
    const { container } = render(<PageHeader title="Only Title" />);

    const subtitle = container.querySelector('h3');
    expect(subtitle).toBeNull();
  });

  test('does not render subtitle when subtitle is undefined', () => {
    const { container } = render(<PageHeader title="Title" subtitle={undefined} />);

    const subtitle = container.querySelector('h3');
    expect(subtitle).toBeNull();
  });

  test('does not render subtitle when subtitle is empty string', () => {
    const { container } = render(<PageHeader title="Title" subtitle="" />);

    const subtitle = container.querySelector('h3');
    expect(subtitle).toBeNull();
  });

  test('does not have theme attribute when theme is not provided', () => {
    const { container } = render(<PageHeader title="No Theme" />);

    const header = container.querySelector('[data-theme]');
    expect(header?.getAttribute('data-theme')).toBeUndefined();
  });

  test('does not render wrong title text', () => {
    render(<PageHeader title="Correct Title" />);

    expect(screen.queryByText('Wrong Title')).toBeNull();
    expect(screen.queryByText('Incorrect Title')).toBeNull();
  });

  test('does not render wrong subtitle text', () => {
    render(<PageHeader title="Title" subtitle="Correct Subtitle" />);

    expect(screen.queryByText('Wrong Subtitle')).toBeNull();
    expect(screen.queryByText('Incorrect Subtitle')).toBeNull();
  });

  test('does not render h2 element', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const h2 = container.querySelector('h2');
    expect(h2).toBeNull();
  });

  test('does not render h4 element', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const h4 = container.querySelector('h4');
    expect(h4).toBeNull();
  });

  test('does not render multiple h1 elements', () => {
    const { container } = render(
      <PageHeader title="Single H1" subtitle="With Subtitle" />,
    );

    const h1Elements = container.querySelectorAll('h1');
    expect(h1Elements.length).toBe(1);
  });

  test('does not render multiple h3 elements when single subtitle provided', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Single Subtitle" />);

    const h3Elements = container.querySelectorAll('h3');
    expect(h3Elements.length).toBe(1);
  });

  test('does not apply wrong theme class', () => {
    const { container } = render(<PageHeader title="Title" theme="light" />);

    const header = container.querySelector('header');
    expect(header?.getAttribute('data-theme')).toBe('light');
  });

  test('does not render paragraph elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(0);
  });

  test('does not render div elements inside header', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const header = container.querySelector('header');
    const divs = header?.querySelectorAll('div');
    expect(divs?.length).toBe(0);
  });

  test('renders with whitespace title', () => {
    const { container } = render(<PageHeader title="   " />);

    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toBe('   ');
  });

  test('title is h1 element not h3', () => {
    render(<PageHeader title="Title" subtitle="Subtitle" />);

    const title = screen.getByText('Title');
    expect(title.tagName).toBe('H1');
    expect(title.tagName).not.toBe('H3');
  });

  test('subtitle is h3 element not h1', () => {
    render(<PageHeader title="Title" subtitle="Subtitle" />);

    const subtitle = screen.getByText('Subtitle');
    expect(subtitle.tagName).toBe('H3');
    expect(subtitle.tagName).not.toBe('H1');
  });

  test('does not render extra elements beyond header, title, and subtitle', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const header = container.querySelector('header');
    const childElements = header?.children;

    expect(childElements?.length).toBe(2); // Only h1 and h3
  });

  test('does not fail with null as title (TypeScript should prevent this)', () => {
    const { container } = render(<PageHeader title={null as any} />);

    // Component attempts to render null as text
    expect(container.querySelector('h1')).toBeTruthy();
  });

  test('does not render button elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('does not render link elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const links = container.querySelectorAll('a');
    expect(links.length).toBe(0);
  });

  test('does not render image elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const images = container.querySelectorAll('img');
    expect(images.length).toBe(0);
  });

  test('does not have invalid theme values', () => {
    const { container } = render(<PageHeader title="Title" theme={'invalid' as any} />);

    const header = container.querySelector('[data-theme]');
    expect(header?.getAttribute('data-theme')).toBe('invalid');
    // Component doesn't validate theme values, just passes them through
  });

  test('does not render nav elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const navs = container.querySelectorAll('nav');
    expect(navs.length).toBe(0);
  });

  test('does not render footer elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const footers = container.querySelectorAll('footer');
    expect(footers.length).toBe(0);
  });

  test('does not render section elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const sections = container.querySelectorAll('section');
    expect(sections.length).toBe(0);
  });

  test('does not render article elements', () => {
    const { container } = render(<PageHeader title="Title" subtitle="Subtitle" />);

    const articles = container.querySelectorAll('article');
    expect(articles.length).toBe(0);
  });

  test('header does not contain more than one h1', () => {
    const { container } = render(<PageHeader title="Unique H1" />);

    const header = container.querySelector('header');
    const h1Count = header?.querySelectorAll('h1').length;

    expect(h1Count).toBe(1);
  });

  test('does not render with dark theme class when light theme specified', () => {
    const { container } = render(<PageHeader title="Title" theme="light" />);

    const header = container.querySelector('header');
    expect(header?.getAttribute('data-theme')).toBe('light');
    expect(header?.getAttribute('data-theme')).not.toBe('dark');
  });

  test('does not render with light theme class when dark theme specified', () => {
    const { container } = render(<PageHeader title="Title" theme="dark" />);

    const header = container.querySelector('header');
    expect(header?.getAttribute('data-theme')).toBe('dark');
    expect(header?.getAttribute('data-theme')).not.toBe('light');
  });
});
