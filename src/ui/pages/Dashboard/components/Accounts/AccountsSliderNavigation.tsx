import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

type AccountSliderNavigationProps = {
  isBeginning: boolean;
  isEnd: boolean;
};

export function AccountSliderNavigation({ isBeginning, isEnd }: AccountSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className="flex items-center justify-center rounded-full p-3 transition-colors enabled:hover:bg-black/5 disabled:opacity-40"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="flex items-center justify-center rounded-full p-3 transition-colors enabled:hover:bg-black/5 disabled:opacity-40"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
