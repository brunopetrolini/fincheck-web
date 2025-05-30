import { CrossCircledIcon } from '@radix-ui/react-icons';
import { type ComponentProps, forwardRef } from 'react';

import { cn } from '@/utils/cn';

type InputProps = ComponentProps<'input'> & {
  name: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, error, ...props }, ref) => {
  const inputId = id ?? name;
  const hasError = !!error;

  return (
    <div className="w-full">
      <div
        className={cn(
          'flex w-full flex-col gap-[2px] rounded-lg border bg-white px-3 py-2 font-medium text-gray-800 transition-colors',
          hasError ? 'border-red-900' : 'border-gray-500 focus-within:border-gray-800',
        )}
      >
        <label htmlFor={inputId} className="text-xs text-gray-700">
          {placeholder}
        </label>
        <input {...props} id={inputId} name={name} className="text-sm outline-none" ref={ref} />
      </div>

      {hasError && (
        <div className="mt-2 flex items-center justify-start gap-2">
          <CrossCircledIcon className="text-red-900" />
          <span className="text-xs text-red-900">{error}</span>
        </div>
      )}
    </div>
  );
});
