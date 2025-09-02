import 'swiper/swiper-bundle.css';

import { PlusIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '@/ui/components/icons/EyeIcon';
import { Spinner } from '@/ui/components/Spinner';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/formatCurrency';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
    openNewAccountModal,
  } = useAccountsController();

  return (
    <div className="flex h-full flex-col rounded-2xl bg-teal-900 px-4 py-8 text-white lg:p-10">
      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner className="h-10 w-10 fill-white text-teal-800" />
        </div>
      )}

      {!isLoading && (
        <>
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
            {accounts.length <= 0 && (
              <>
                <div className="mb-4 items-center">
                  <strong className="text-lg tracking-[-1px]">Minhas contas</strong>
                </div>

                <button
                  onClick={openNewAccountModal}
                  className="mt-4 flex h-52 w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>
                  <span className="w-32 text-center font-medium tracking-[-0.5px] text-white">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
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

                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard
                        color={account.color}
                        name={account.name}
                        balance={account.balance}
                        type={account.type}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
