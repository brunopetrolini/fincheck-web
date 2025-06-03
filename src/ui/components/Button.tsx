import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps = ComponentProps<'button'> & {
  children: React.ReactNode;
  isLoading?: boolean;
};

export function Button({ className, children, isLoading = false, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className={cn(
        'h-12 rounded-2xl bg-teal-900 px-6 font-medium text-white transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
