import { PlusIcon } from '@radix-ui/react-icons';

import { DropDown } from '@/ui/components/DropDown';
import { BankAccountIcon } from '@/ui/components/icons/BankAccountIcon';
import { CategoryIcon } from '@/ui/components/icons/categories/CategoryIcon';

import { useDashboard } from './DashboardContext/useDashboard';

export function FloatActionButton() {
  const { openNewAccountModal } = useDashboard();

  return (
    <DropDown.Menu>
      <DropDown.Trigger className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-white transition-colors hover:bg-teal-800">
        <PlusIcon className="h-6 w-6" />
      </DropDown.Trigger>

      <DropDown.Content anchor="top end" className="-mt-2">
        <DropDown.Item onClick={() => {}} className="gap-2">
          <CategoryIcon type="EXPENSE" size={32} />
          Nova despesa
        </DropDown.Item>
        <DropDown.Item onClick={() => {}} className="gap-2">
          <CategoryIcon type="INCOME" size={32} />
          Nova receita
        </DropDown.Item>
        <DropDown.Item onClick={openNewAccountModal} className="gap-2">
          <BankAccountIcon size={32} />
          Nova conta
        </DropDown.Item>
      </DropDown.Content>
    </DropDown.Menu>
  );
}
