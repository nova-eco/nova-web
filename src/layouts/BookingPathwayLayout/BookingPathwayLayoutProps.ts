import { ReactNode } from 'react';
import type { UserInterfaceTheme } from '@app/types';

export interface BookingPathwayLayoutProps {
  className?: string;
  headerHeightPx?: number;
  overlay?: ReactNode;
  theme?: UserInterfaceTheme;
}
