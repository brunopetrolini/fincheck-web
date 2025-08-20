import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/ui/components/Button';
import { Modal } from '@/ui/components/Modal';
import { cn } from '@/utils/cn';

import { useFiltersModal } from './useFiltersModal';

type FiltersModalProps = {
  open: boolean;
  onClose?: () => void;
};

const mockedAccounts = [
  { id: '1', name: 'XP Investimentos' },
  { id: '2', name: 'Nubank' },
  { id: '3', name: 'Dinheiro' },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const { selectedBankAccountId, handleSelectBankAccount, selectedYear, handleChangeYear } = useFiltersModal();

  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <div className="text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">Conta</span>

        <div className="mt-2 space-y-2 text-sm">
          {mockedAccounts.map((account) => (
            <button
              key={account.id}
              className={cn(
                'w-full rounded-2xl p-2 text-left transition-colors hover:bg-gray-50',
                selectedBankAccountId === account.id && '!bg-gray-200',
              )}
              onClick={() => handleSelectBankAccount(account.id)}
            >
              <span>{account.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">Ano</span>

        <div className="mt-2 flex w-52 flex-row items-center justify-between">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-gray-50"
            onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <span className="text-sm tracking-[-0.5px]">{selectedYear}</span>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-gray-50"
            onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button className="mt-10 w-full">Aplicar Filtros</Button>
    </Modal>
  );
}
