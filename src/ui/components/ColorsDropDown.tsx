import { ChevronDownIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@/utils/cn';

import { DropDown } from './DropDown';
import { ColorIcon } from './icons/ColorIcon';

type ColorsDropDownProps = {
  className?: string;
  error?: string;
};

type Color = {
  color: string;
  bg: string;
};

export function ColorsDropDown({ className, error }: ColorsDropDownProps) {
  const colors: Color[] = [
    { color: '#868E96', bg: '#F8F9FA' },
    { color: '#FA5252', bg: '#FFF5F5' },
    { color: '#E64980', bg: '#FFF0F6' },
    { color: '#BE4BDB', bg: '#F8F0FC' },
    { color: '#7950F2', bg: '#F3F0FF' },
    { color: '#4C6EF5', bg: '#EDF2FF' },
    { color: '#228BE6', bg: '#E7F5FF' },
    { color: '#15AABF', bg: '#E3FAFC' },
    { color: '#12B886', bg: '#E6FCF5' },
    { color: '#40C057', bg: '#EBFBEE' },
    { color: '#82C91E', bg: '#F4FCE3' },
    { color: '#FAB005', bg: '#FFF9DB' },
    { color: '#FD7E14', bg: '#FFF4E6' },
    { color: '#212529', bg: '#F8F9FA' },
    { color: '#FFFFFF', bg: '#DEE2E6' },
  ];

  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  function handleSelect(color: Color) {
    setSelectedColor(color);
  }

  return (
    <div>
      <DropDown.Menu>
        <DropDown.Trigger
          className={cn(
            'h-14 w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-sm text-gray-700 outline-none focus:border-gray-800',
            error ? 'border-red-900' : 'border-gray-500 focus-within:border-gray-800',
            className,
          )}
        >
          <div className="flex items-center justify-between">
            <span>Cor</span>

            {selectedColor ? (
              <div className="flex items-center justify-center rounded-full">
                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              </div>
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </div>
        </DropDown.Trigger>

        <DropDown.Content anchor="top start" className="grid grid-cols-4 gap-2">
          {colors.map((color, index) => (
            <DropDown.Item key={index} onClick={() => handleSelect(color)} className="">
              <ColorIcon color={color.color} bg={color.bg} />
            </DropDown.Item>
          ))}
        </DropDown.Content>
      </DropDown.Menu>

      {error && (
        <div className="mt-2 flex items-center justify-start gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
