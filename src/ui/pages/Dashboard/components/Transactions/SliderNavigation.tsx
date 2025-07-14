import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

type SliderNavigationProps = {
  isBeginning: boolean;
  isEnd: boolean;
};

export function SliderNavigation({ isBeginning, isEnd }: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-100 enabled:hover:bg-gray-200 disabled:opacity-40"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-100 enabled:hover:bg-gray-200 disabled:opacity-40"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
