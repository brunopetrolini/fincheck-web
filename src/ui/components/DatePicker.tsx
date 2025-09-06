import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@/utils/cn';

type DatePickerProps = {
  className?: string;
  error?: string;
};

export function DatePicker({ className, error }: DatePickerProps) {
  const [selectedDate] = useState<Date>(new Date());

  return (
    <div>
      <button
        className={cn(
          'h-14 w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-sm text-gray-700 outline-none focus:border-gray-800',
          error ? 'border-red-900' : 'border-gray-500 focus-within:border-gray-800',
          className,
        )}
        type="button"
      >
        <div className="flex flex-col">
          <span className="text-xs text-gray-700">Data</span>
          <span className="text-sm text-gray-800">{selectedDate.toLocaleDateString()}</span>
        </div>
      </button>

      {error && (
        <div className="mt-2 flex items-center justify-start gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
