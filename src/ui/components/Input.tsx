import { type ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'> & { name: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, ...props }, ref) => {
  const inputId = id ?? name;

  return (
    <div className="flex w-full flex-col gap-[2px] rounded-lg border border-gray-500 bg-white px-3 py-2 font-medium text-gray-800 transition-colors focus-within:border-gray-800">
      <label htmlFor={inputId} className="text-xs text-gray-700">
        {placeholder}
      </label>
      <input {...props} id={inputId} name={name} className="text-sm outline-none" ref={ref} />
    </div>
  );
});
