import { render } from '@testing-library/react';
import EyeIcon from '@app/components/EyeIcon';

describe('EyeIcon - Positive Tests', () => {
  test('renders an SVG element', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG namespace', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg?.namespaceURI).toBe('http://www.w3.org/2000/svg');
  });

  test('has correct viewBox attribute', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  test('has h-5 w-5 class for sizing', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-5', 'w-5');
  });

  test('has two path elements for eye shape', () => {
    const { container } = render(<EyeIcon />);

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
  });

  test('has stroke attribute set to currentColor', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('stroke', 'currentColor');
  });

  test('has fill attribute set to none', () => {
    const { container } = render(<EyeIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'none');
  });

  test('renders consistently on multiple renders', () => {
    const { container: container1 } = render(<EyeIcon />);
    const { container: container2 } = render(<EyeIcon />);

    expect(container1.innerHTML).toBe(container2.innerHTML);
  });

  test('has correct stroke properties on paths', () => {
    const { container } = render(<EyeIcon />);

    const paths = container.querySelectorAll('path');

    paths.forEach((path) => {
      expect(path).toHaveAttribute('strokeLinecap', 'round');
      expect(path).toHaveAttribute('strokeLinejoin', 'round');
      expect(path).toHaveAttribute('strokeWidth', '2');
    });
  });
});
