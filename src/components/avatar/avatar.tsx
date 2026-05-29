import { ComponentPropsWithoutRef } from 'react';

import * as AvatarRadix from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { UserRound } from 'lucide-react';

import styles from './avatar.module.scss';

type Props = { avatarSrc?: string } & ComponentPropsWithoutRef<typeof AvatarRadix.Root>;

export const Avatar = ({ className, avatarSrc, ...rest }: Props) => {
  return (
    <AvatarRadix.Root className={clsx(styles.avatar, className)} {...rest}>
      <AvatarRadix.Image className={styles.img} src={avatarSrc} alt="avatar" />
      <AvatarRadix.Fallback className={styles.fallback}>
        <UserRound size={18} />
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  );
};
