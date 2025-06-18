import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { EyeIcon } from '@/ui/components/icons/EyeIcon';

import { AccountCard } from './AccountCard';

export function Accounts() {
  const [isShowBalance, setIsShowBalance] = useState(true);

  return (
    <div className="flex flex-1 flex-col rounded-2xl bg-teal-900 px-4 py-8 text-white lg:p-10">
      <div>
        <span className="block font-normal tracking-[-0.5px]">Saldo total</span>

        <div className="flex flex-row items-center gap-2">
          <strong className="text-3xl tracking-[-1px]">R$ 1000,00</strong>

          <button className="flex items-center justify-center p-3" onClick={() => setIsShowBalance(!isShowBalance)}>
            <EyeIcon open={isShowBalance} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div className="flex items-center justify-between">
          <strong className="text-lg tracking-[-1px]">Minhas contas</strong>

          <div className="flex">
            <button className="flex items-center justify-center rounded-full p-3 transition-colors enabled:hover:bg-black/5 disabled:opacity-40">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button className="flex items-center justify-center rounded-full p-3 transition-colors enabled:hover:bg-black/5 disabled:opacity-40">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <AccountCard color="#7950F2" name="Nubank" balance={123} />
        </div>
      </div>
    </div>
  );
}
