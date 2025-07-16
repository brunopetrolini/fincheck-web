import { BankAccountTypeIcon } from '@/ui/components/icons/BankAccountTypeIcon';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/formatCurrency';

import { useDashboard } from '../DashboardContext/useDashboard';

type AccountCardProps = {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
};

export function AccountCard({ color, name, balance }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4 font-medium text-gray-800"
      style={{ borderBottomColor: color }}
    >
      <div className="flex flex-col gap-4">
        <BankAccountTypeIcon type="CASH" />
        <span className="tracking-[-0.5px]">{name}</span>
      </div>

      <div className="flex flex-col">
        <span className={cn('tracking-[-0.5px]', !areValuesVisible && 'blur-sm')}>{formatCurrency(balance)}</span>
        <small className="text-sm font-normal text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
