import { render } from '@testing-library/react';
import EyeIcon from '@app/components/EyeIcon';

describe('EyeIcon - Negative Tests', () => {
  it('should not throw error when rendered', () => {
    expect(() => render(<EyeIcon />)).not.toThrow();
  });

  it('should not have any text content', () => {
    const { container } = render(<EyeIcon />);
    expect(container.textContent).toBe('');
  });

  it('should render without any props', () => {
    expect(() => render(<EyeIcon />)).not.toThrow();
  });

  it('should maintain structure when rendered in different contexts', () => {
    const { container: container1 } = render(
      <div>
        <EyeIcon />
      </div>,
    );
    const { container: container2 } = render(
      <span>
        <EyeIcon />
      </span>,
    );

    const svg1 = container1.querySelector('svg');
    const svg2 = container2.querySelector('svg');

    expect(svg1?.getAttribute('viewBox')).toBe(svg2?.getAttribute('viewBox'));
  });

  it('should not accept className prop', () => {
    const { container } = render(
      // @ts-expect-error Testing invalid prop
      <EyeIcon className="custom-class" />,
    );
    const svg = container.querySelector('svg');
    expect(svg?.className).not.toContain('custom-class');
  });

  it('should not accept style prop', () => {
    const { container } = render(
      // @ts-expect-error Testing invalid prop
      <EyeIcon style={{ color: 'red' }} />,
    );
    const svg = container.querySelector('svg');
    expect(svg?.style.color).not.toBe('red');
  });

  it('should not accept onClick prop', () => {
    const handleClick = jest.fn();
    render(
      // @ts-expect-error Testing invalid prop
      <EyeIcon onClick={handleClick} />,
    );
    expect(handleClick).not.toHaveBeenCalled();
  });
});
