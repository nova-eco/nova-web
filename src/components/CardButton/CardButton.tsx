import React from 'react';
import * as styles from './CardButton.module.css';
import type { CardButtonProps } from './CardButtonProps';

export const CardButton: React.FC<CardButtonProps> = (props) => {
  const { label, onClick, theme } = props;

  const className =
    typeof theme !== 'undefined'
      ? `${styles.CardButton} ${theme}`
      : `${styles.CardButton}`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
