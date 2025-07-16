import { useState } from 'react';

import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isLoading] = useState(false);
  const [isContentLoading] = useState(false);
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    areValuesVisible,
    isLoading,
    isContentLoading,
    transactions: [
      { id: 1, description: 'Compra no Nubank', amount: 100, date: '15/03/2023', type: 'EXPENSE' },
      { id: 2, description: 'Transferência para XP', amount: 200, date: '16/03/2023', type: 'INCOME' },
      { id: 3, description: 'Pagamento de conta', amount: 50, date: '17/03/2023', type: 'EXPENSE' },
    ],
  };
}
