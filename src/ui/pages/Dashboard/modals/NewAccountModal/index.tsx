import { ColorsDropDown } from '@/ui/components/ColorsDropDown';
import { Input } from '@/ui/components/Input';
import { InputCurrency } from '@/ui/components/InputCurrency';
import { Modal } from '@/ui/components/Modal';
import { Select } from '@/ui/components/Select';

import { useNewAccountModal } from './useNewAccountModal';

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useNewAccountModal();

  const options = [
    { label: 'Dinheiro Físico', value: 'CASH' },
    { label: 'Conta Corrente', value: 'CHECKING' },
    { label: 'Investimentos', value: 'INVESTMENT' },
  ];

  return (
    <Modal title="Nova conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal}>
      <form>
        <div>
          <span className="text-xs text-gray-600">Saldo</span>

          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input placeholder="Nome da conta" name="accountName" type="text" />
          <Select placeholder="Tipo" options={options} />
          <ColorsDropDown />
        </div>
      </form>
    </Modal>
  );
}
