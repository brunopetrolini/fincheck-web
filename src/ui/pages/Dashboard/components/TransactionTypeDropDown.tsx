import { ChevronDownIcon } from '@radix-ui/react-icons';

import { DropDown } from '@/ui/components/DropDown';
import { ExpensesIcon } from '@/ui/components/icons/ExpensesIcon';
import { IncomeIcon } from '@/ui/components/icons/IncomeIcon';
import { TransactionsIcon } from '@/ui/components/icons/TransactionsIcon';

export function TransactionTypeDropDown() {
  return (
    <DropDown.Menu>
      <DropDown.Trigger className="flex items-center gap-2 text-gray-900">
        <TransactionsIcon />
        <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Transações</span>
        <ChevronDownIcon />
      </DropDown.Trigger>

      <DropDown.Content anchor="bottom start" className="mt-2 w-64">
        <DropDown.Item className="gap-2" onClick={() => {}}>
          <IncomeIcon />
          Receitas
        </DropDown.Item>
        <DropDown.Item className="gap-2" onClick={() => {}}>
          <ExpensesIcon />
          Despesas
        </DropDown.Item>
        <DropDown.Item className="gap-2" onClick={() => {}}>
          <TransactionsIcon />
          Transações
        </DropDown.Item>
      </DropDown.Content>
    </DropDown.Menu>
  );
}
