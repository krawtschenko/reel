import { ComponentPropsWithoutRef, forwardRef } from 'react';

import clsx from 'clsx';
import { Search } from 'lucide-react';

import style from './searchInput.module.scss';

type Props = {
  kbd?: string;
} & ComponentPropsWithoutRef<'input'>;

const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.userAgent);

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ className, placeholder, kbd = isMac ? '⌘K' : 'Ctrl+K', ...rest }, ref) => {
    return (
      <div className={clsx(style.field, className)}>
        <Search className={style.icon} size={18} />
        <input ref={ref} className={style.input} placeholder={placeholder} {...rest} />
        {kbd && <span className={style.kbd}>{kbd}</span>}
      </div>
    );
  },
);

SearchInput.displayName = 'SearchInput';
