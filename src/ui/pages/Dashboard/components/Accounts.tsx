import { useState } from 'react';

import { EyeIcon } from '@/ui/components/icons/EyeIcon';

export function Accounts() {
  const [isShowBalance, setIsShowBalance] = useState(true);

  return (
    <div className="flex-1 select-none rounded-2xl bg-teal-900 px-4 py-8 text-white lg:p-10">
      <div className="flex flex-col">
        <span className="font-normal tracking-[-0.5px]">Saldo total</span>
        <div className="flex flex-row items-center gap-2">
          <strong className="text-3xl tracking-[-1px]">R$ 1000,00</strong>
          <button
            className="flex cursor-pointer items-center justify-center p-3"
            onClick={() => setIsShowBalance(!isShowBalance)}
          >
            <EyeIcon open={isShowBalance} />
          </button>
        </div>
      </div>
    </div>
  );
}
