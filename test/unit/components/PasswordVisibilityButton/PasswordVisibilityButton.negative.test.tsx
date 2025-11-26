import { fireEvent, render, screen } from '@testing-library/react';
import PasswordVisibilityButton from '@app/components/PasswordVisibilityButton';

describe('PasswordVisibilityButton - Negative Tests', () => {
  it('should be disabled when isLoading is true', () => {
    render(
      <PasswordVisibilityButton
        isLoading={true}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('should be disabled when isSubmitting is true', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={true}
        onClick={() => {}}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('should be disabled when both isLoading and isSubmitting are true', () => {
    render(
      <PasswordVisibilityButton
        isLoading={true}
        isSubmitting={true}
        onClick={() => {}}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('should not call onClick when disabled and clicked', () => {
    const handleClick = jest.fn();
    render(
      <PasswordVisibilityButton
        isLoading={true}
        isSubmitting={false}
        onClick={handleClick}
        showPassword={false}
      />,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should handle undefined onClick gracefully', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={undefined as any}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button');

    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('should handle null onClick gracefully', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={null as any}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button');

    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('should handle rapid clicks', () => {
    const handleClick = jest.fn();
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={handleClick}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    for (let i = 0; i < 100; i++) {
      fireEvent.click(button);
    }

    expect(handleClick).toHaveBeenCalledTimes(100);
  });

  it('should not crash with invalid showPassword type', () => {
    expect(() =>
      render(
        <PasswordVisibilityButton
          isLoading={false}
          isSubmitting={false}
          onClick={() => {}}
          showPassword={'invalid' as any}
        />,
      ),
    ).not.toThrow();
  });

  it('should not crash with null showPassword', () => {
    expect(() =>
      render(
        <PasswordVisibilityButton
          isLoading={false}
          isSubmitting={false}
          onClick={() => {}}
          showPassword={null as any}
        />,
      ),
    ).not.toThrow();
  });

  it('should not crash with undefined showPassword', () => {
    expect(() =>
      render(
        <PasswordVisibilityButton
          isLoading={false}
          isSubmitting={false}
          onClick={() => {}}
          showPassword={undefined as any}
        />,
      ),
    ).not.toThrow();
  });

  it('should maintain disabled state through re-renders', () => {
    const { rerender } = render(
      <PasswordVisibilityButton
        isLoading={true}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);

    rerender(
      <PasswordVisibilityButton
        isLoading={true}
        isSubmitting={true}
        onClick={() => {}}
        showPassword={true}
      />,
    );
    expect(button.disabled).toBe(true);
  });
});
