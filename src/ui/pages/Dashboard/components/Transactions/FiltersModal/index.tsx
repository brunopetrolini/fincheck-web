import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/ui/components/Button';
import { Modal } from '@/ui/components/Modal';

type FiltersModalProps = {
  open: boolean;
  onClose?: () => void;
};

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <div className="text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">Conta</span>

        <div className="mt-2 space-y-2 text-sm">
          <button className="w-full rounded-2xl !bg-gray-200 p-2 text-left transition-colors hover:bg-gray-50">
            <span>XP Investimentos</span>
          </button>

          <button className="w-full rounded-2xl p-2 text-left transition-colors hover:bg-gray-50">
            <span>Nubank</span>
          </button>

          <button className="w-full rounded-2xl p-2 text-left transition-colors hover:bg-gray-50">
            <span>Dinheiro</span>
          </button>
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">Ano</span>

        <div className="mt-2 flex w-52 flex-row items-center justify-between">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-gray-50">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <span className="text-sm tracking-[-0.5px]">2025</span>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-gray-50">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button className="mt-10 w-full">Aplicar Filtros</Button>
    </Modal>
  );
}
