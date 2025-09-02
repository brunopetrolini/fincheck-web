import { NumericFormat } from 'react-number-format';

import { cn } from '@/utils/cn';

interface InputCurrencyProps {
  className?: string;
}

export function InputCurrency({ className }: InputCurrencyProps) {
  return (
    <NumericFormat
      className={cn(
        'w-full bg-transparent text-[32px] font-bold tracking-[-1px] text-gray-800 outline-none',
        className,
      )}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      defaultValue={0.0}
      allowNegative={false}
    />
  );
}
