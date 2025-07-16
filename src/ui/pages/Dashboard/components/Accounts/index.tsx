import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '@/ui/components/icons/EyeIcon';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/formatCurrency';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const { sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility } =
    useAccountsController();

  return (
    <div className="flex h-full flex-col rounded-2xl bg-teal-900 px-4 py-8 text-white lg:p-10">
      <div>
        <span className="block font-normal tracking-[-0.5px]">Saldo total</span>

        <div className="flex flex-row items-center gap-2">
          <strong className={cn('text-3xl tracking-[-1px]', !areValuesVisible && 'blur-md')}>
            {formatCurrency(1000)}
          </strong>

          <button className="flex items-center justify-center p-3" onClick={toggleValuesVisibility}>
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end lg:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth > 500 ? 2.1 : 1.2}
            onSlideChange={({ isBeginning, isEnd }) => {
              setSliderState({ isBeginning, isEnd });
            }}
          >
            <div slot="container-start" className="mb-4 flex items-center justify-between">
              <strong className="text-lg tracking-[-1px]">Minhas contas</strong>

              {windowWidth > 500 && (
                <SliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
              )}
            </div>

            <SwiperSlide>
              <AccountCard color="#7950F2" name="Nubank" balance={123} type="CASH" />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard color="#333" name="XP" balance={123} type="INVESTMENT" />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard color="#0f0" name="Carteira" balance={123} type="CHECKING" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
