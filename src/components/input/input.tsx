import { ComponentPropsWithoutRef, useId } from 'react';

import clsx from 'clsx';

import style from './input.module.scss';

type Props = {
  label?: string;
  hint?: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ className, label, hint, error, ...rest }: Props) => {
  const id = useId();

  return (
    <label className={clsx(style.field, className)} htmlFor={id}>
      {label && <span className={style.label}>{label}</span>}
      <input id={id} className={style.input} aria-invalid={!!error} {...rest} />
      {error ? (
        <span className={style.error}>{error}</span>
      ) : hint ? (
        <span className={style.hint}>{hint}</span>
      ) : null}
    </label>
  );
};
