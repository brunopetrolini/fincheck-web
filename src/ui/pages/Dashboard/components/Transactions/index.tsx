import 'swiper/swiper-bundle.css';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@/app/config/constants';
import { FilterIcon } from '@/ui/components/icons/FilterIcon';
import { TransactionsIcon } from '@/ui/components/icons/TransactionsIcon';

import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const { sliderState, setSliderState } = useTransactionsController();

  return (
    <div className="h-full w-full rounded-2xl bg-gray-100 px-4 py-8 lg:p-10">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-900">
            <TransactionsIcon />
            <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Transações</span>
            <ChevronDownIcon />
          </button>

          <button className="text-gray-900">
            <FilterIcon />
          </button>
        </div>

        <div className="relative mt-6">
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            centeredSlides
            onSlideChange={({ isBeginning, isEnd }) => {
              setSliderState({ isBeginning, isEnd });
            }}
          >
            <SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />

            {MONTHS.map((month, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => <SliderOption index={index} month={month} isActive={isActive} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4">Conteúdo</div>
    </div>
  );
}
