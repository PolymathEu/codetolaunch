'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'secondary' | 'outline';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm';

type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps;
type LinkButtonProps = React.ComponentProps<typeof Link> & ButtonStyleProps;

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
  isLink = false,
) {
  return cn(
    'group inline-flex items-center justify-center gap-2 font-medium',
    isLink
      ? 'transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jet-ink'
      : 'transition-[background-color,box-shadow,border-color,opacity] duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 active:opacity-90',

    size === 'default' && 'rounded-full px-5 py-2.5 text-sm',
    size === 'sm' && 'rounded-full px-4 py-2 text-sm',
    size === 'lg' && 'rounded-full px-6 py-3 text-base',
    size === 'icon' && 'h-10 w-10 rounded-full p-0',
    size === 'icon-sm' && 'h-8 w-8 rounded-full p-0',

    variant === 'default' && [
      'bg-paper text-background',
      !isLink && 'shadow-[0_2px_10px_rgba(0,0,0,0.08)]',
      !isLink && 'hover:bg-paper/90',
      !isLink && 'hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
    ],

    variant === 'secondary' && [
      'bg-primary text-primary-foreground',
      'hover:bg-primary/90',
    ],

    variant === 'outline' && [
      'border border-border bg-background text-foreground',
      !isLink && 'shadow-[0_2px_10px_rgba(0,0,0,0.04)]',
      'hover:bg-muted/50',
      'hover:border-border',
    ],

    className,
  );
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={buttonClassName(variant, size, className, true)}
      {...props}
    >
      {children}
    </Link>
  );
}