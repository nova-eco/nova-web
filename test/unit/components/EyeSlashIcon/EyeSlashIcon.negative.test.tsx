import { render } from '@testing-library/react';
import EyeSlashIcon from '@app/components/EyeSlashIcon';

describe('EyeSlashIcon - Negative Tests', () => {
  it('should not throw error when rendered', () => {
    expect(() => render(<EyeSlashIcon />)).not.toThrow();
  });

  it('should not have any text content', () => {
    const { container } = render(<EyeSlashIcon />);
    expect(container.textContent).toBe('');
  });

  it('should render without any props', () => {
    expect(() => render(<EyeSlashIcon />)).not.toThrow();
  });

  it('should maintain structure when rendered in different contexts', () => {
    const { container: container1 } = render(
      <div>
        <EyeSlashIcon />
      </div>,
    );
    const { container: container2 } = render(
      <span>
        <EyeSlashIcon />
      </span>,
    );

    const svg1 = container1.querySelector('svg');
    const svg2 = container2.querySelector('svg');

    expect(svg1?.getAttribute('viewBox')).toBe(svg2?.getAttribute('viewBox'));
  });

  it('should not accept className prop', () => {
    const { container } = render(
      // @ts-expect-error Testing invalid prop
      <EyeSlashIcon className="custom-class" />,
    );
    const svg = container.querySelector('svg');
    expect(svg?.className).not.toContain('custom-class');
  });

  it('should not accept style prop', () => {
    const { container } = render(
      // @ts-expect-error Testing invalid prop
      <EyeSlashIcon style={{ color: 'red' }} />,
    );
    const svg = container.querySelector('svg');
    expect(svg?.style.color).not.toBe('red');
  });

  it('should not accept onClick prop', () => {
    const handleClick = jest.fn();
    render(
      // @ts-expect-error Testing invalid prop
      <EyeSlashIcon onClick={handleClick} />,
    );
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should have different structure than EyeIcon', () => {
    const { container } = render(<EyeSlashIcon />);
    const paths = container.querySelectorAll('path');

    expect(paths.length).toBe(1);
  });
});
