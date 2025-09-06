import { DatePicker } from '@/ui/components/DatePicker';
import { Input } from '@/ui/components/Input';
import { InputCurrency } from '@/ui/components/InputCurrency';
import { Modal } from '@/ui/components/Modal';
import { Select } from '@/ui/components/Select';

import { useNewTransactionModalController } from './useNewTransactionModal';

export function NewTransactionModal() {
  const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionModalType } =
    useNewTransactionModalController();

  const isIncome = newTransactionModalType === 'income';

  const title = isIncome ? 'Nova Receita' : 'Nova Despesa';
  const valueLabel = isIncome ? 'recebido' : 'gasto';
  const categories = isIncome
    ? [
        { label: 'Salário', value: 'SALARY' },
        { label: 'Rendimentos', value: 'INVESTMENTS' },
      ]
    : [
        { label: 'Alimentação', value: 'FOOD' },
        { label: 'Casa', value: 'HOUSE' },
        { label: 'Educação', value: 'EDUCATION' },
        { label: 'Lazer', value: 'ENTERTAINMENT' },
      ];
  const accountPlaceholder = isIncome ? 'Receber na conta' : 'Pagar com';

  return (
    <Modal title={title} open={isNewTransactionModalOpen} onClose={closeNewTransactionModal}>
      <form>
        <div>
          <span className="text-xs text-gray-600">Valor {valueLabel}</span>

          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input placeholder={isIncome ? 'Nome da Receita' : 'Nome da Despesa'} name="transactionName" type="text" />
          <Select placeholder="Categoria" options={categories} />
          <Select placeholder={accountPlaceholder} options={[{ label: 'Dinheiro Físico', value: 'CASH' }]} />
          <DatePicker />
        </div>
      </form>
    </Modal>
  );
}
