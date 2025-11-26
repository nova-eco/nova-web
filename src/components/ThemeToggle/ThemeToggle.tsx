import { Moon, Sun } from 'lucide-react';
import React from 'react';
import * as styles from './themeToggle.module.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      className={`${styles.themeToggle}`}
      onClick={onToggle}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === 'light' ? (
        <>
          <Moon className={styles.icon} />
          <span className={styles.label}>Dark</span>
        </>
      ) : (
        <>
          <Sun className={styles.icon} />
          <span className={styles.label}>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
