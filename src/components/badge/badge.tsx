import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

import styles from './badge.module.scss';

type Props = {
  text: string;
  variant?: 'neutral' | 'accent' | 'signal' | 'success' | 'solid';
  icon?: LucideIcon;
};

export const Badge = ({ text, variant = 'neutral', icon: Icon }: Props) => {
  return (
    <span className={clsx(styles.badge, styles[variant])}>
      {Icon && <Icon size={11} />}
      {text}
    </span>
  );
};
