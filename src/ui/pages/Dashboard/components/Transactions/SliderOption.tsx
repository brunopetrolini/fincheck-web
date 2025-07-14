import { useSwiper } from 'swiper/react';

import { cn } from '@/utils/cn';

type SliderOptionProps = {
  index: number;
  month: string;
  isActive: boolean;
};

export function SliderOption({ index, month, isActive }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index, 250)}
      className={cn(
        'h-12 w-full rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  );
}
