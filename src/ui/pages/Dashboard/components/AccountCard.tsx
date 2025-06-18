import { CategoryIcon } from '@/ui/components/icons/categories/CategoryIcon';
import { formatCurrency } from '@/utils/formatCurrency';

type AccountCardProps = {
  color: string;
  name: string;
  balance: number;
};

export function AccountCard({ color, name, balance }: AccountCardProps) {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4 font-medium text-gray-800"
      style={{ borderBottomColor: color }}
    >
      <div className="flex flex-col gap-4">
        <CategoryIcon type="INCOME" />
        <span className="tracking-[-0.5px]">{name}</span>
      </div>

      <div className="flex flex-col">
        <span className="tracking-[-0.5px]">{formatCurrency(balance)}</span>
        <small className="text-sm font-normal text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
