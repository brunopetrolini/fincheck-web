import 'swiper/swiper-bundle.css';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@/app/config/constants';
import emptyStateIllustration from '@/assets/empty-state.svg';
import { CategoryIcon } from '@/ui/components/icons/categories/CategoryIcon';
import { FilterIcon } from '@/ui/components/icons/FilterIcon';
import { TransactionsIcon } from '@/ui/components/icons/TransactionsIcon';
import { Spinner } from '@/ui/components/Spinner';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/formatCurrency';

import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const { sliderState, setSliderState, areValuesVisible, isLoading, isContentLoading, transactions } =
    useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 lg:p-10">
      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}

      {!isLoading && (
        <>
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

          {isContentLoading ? (
            <div className="mt-4 flex h-full items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              {!hasTransactions && (
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <img src={emptyStateIllustration} alt="Empty state" />
                  <span className="text-gray-700">Não encontramos nenhuma transação!</span>
                </div>
              )}

              {hasTransactions && (
                <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                    <div className="flex">
                      <CategoryIcon type="EXPENSE" category="food" />

                      <div className="ml-3 flex flex-col">
                        <strong className="tracking-[-0.5px] text-gray-800">Almoço</strong>
                        <small className="text-sm text-gray-600">15/04/2025</small>
                      </div>
                    </div>

                    <div>
                      <span
                        className={cn('font-medium tracking-[-0.5px] text-red-800', !areValuesVisible && 'blur-sm')}
                      >
                        - {formatCurrency(123)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                    <div className="flex flex-1">
                      <CategoryIcon type="INCOME" />

                      <div className="ml-3 flex flex-col">
                        <strong className="tracking-[-0.5px] text-gray-800">Salário</strong>
                        <small className="text-sm text-gray-600">15/04/2025</small>
                      </div>
                    </div>

                    <div>
                      <span
                        className={cn('font-medium tracking-[-0.5px] text-green-800', !areValuesVisible && 'blur-sm')}
                      >
                        + {formatCurrency(13210)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
