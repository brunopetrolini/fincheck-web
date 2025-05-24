import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & { name: string };

export function Input({ placeholder, name, id, ...props }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-[2px] rounded-lg border border-gray-500 bg-white px-3 py-2 font-medium text-gray-800 transition-colors focus-within:border-gray-800">
      <label htmlFor={id ?? name} className="text-xs text-gray-700">
        {placeholder}
      </label>
      <input {...props} id={id ?? name} name={name} className="text-sm outline-none" />
    </div>
  );
}
