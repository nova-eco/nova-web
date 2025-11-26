import { Clock } from 'lucide-react';
import React from 'react';
import * as styles from './CountdownTimer.module.css';
import type { CountdownTimerProps } from './CountdownTimerProps';
import { formatTimeRemaining } from './formatTimeRemaining';

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timeRemaining,
  bookingComplete,
}) => {
  if (bookingComplete || timeRemaining === null) {
    return null;
  }

  return (
    <div className={styles.countdown}>
      <Clock className={styles.icon} />
      <span className={styles.text}>
        Time remaining: {formatTimeRemaining(timeRemaining)}
      </span>
    </div>
  );
};
