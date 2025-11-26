import { render } from '@testing-library/react';
import EyeSlashIcon from '@app/components/EyeSlashIcon';

describe('EyeSlashIcon - Positive Tests', () => {
  test('renders an SVG element', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('has correct SVG namespace', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg?.namespaceURI).toBe('http://www.w3.org/2000/svg');
  });

  test('has correct viewBox attribute', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  test('has h-5 w-5 class for sizing', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-5', 'w-5');
  });

  test('has one path element for slashed eye shape', () => {
    const { container } = render(<EyeSlashIcon />);

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(1);
  });

  test('has stroke attribute set to currentColor', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('stroke', 'currentColor');
  });

  test('has fill attribute set to none', () => {
    const { container } = render(<EyeSlashIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'none');
  });

  test('has strokeWidth of 2 on path', () => {
    const { container } = render(<EyeSlashIcon />);

    const path = container.querySelector('path');
    expect(path).toHaveAttribute('strokeWidth', '2');
  });

  test('renders consistently on multiple renders', () => {
    const { container: container1 } = render(<EyeSlashIcon />);
    const { container: container2 } = render(<EyeSlashIcon />);

    expect(container1.innerHTML).toBe(container2.innerHTML);
  });

  test('has slash line in path data', () => {
    const { container } = render(<EyeSlashIcon />);

    const path = container.querySelector('path');
    const pathData = path?.getAttribute('d');

    expect(pathData).toContain('M3 3');
    expect(pathData).toContain('L21 21');
  });
});
