import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { Spinner } from './Spinner';

type ButtonProps = ComponentProps<'button'> & {
  children: React.ReactNode;
  isLoading?: boolean;
};

export function Button({ className, children, isLoading = false, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={cn(
        'flex h-12 items-center justify-center rounded-2xl bg-teal-900 px-6 font-medium text-white transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
        className,
      )}
      {...props}
    >
      {isLoading ? <Spinner className="h-6 w-6" /> : children}
    </button>
  );
}
