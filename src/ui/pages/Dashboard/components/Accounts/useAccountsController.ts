import { useState } from 'react';

import { useWindowWidth } from '@/app/hooks/useWindowWidth';

import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const [isLoading] = useState(false);
  const { areValuesVisible, toggleValuesVisibility } = useDashboard();

  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts: [
      { id: 1, name: 'Nubank', balance: 123, type: 'CASH' as const, color: '#7950F2' },
      { id: 2, name: 'XP', balance: 123, type: 'INVESTMENT' as const, color: '#333' },
      { id: 3, name: 'Carteira', balance: 123, type: 'CHECKING' as const, color: '#0f0' },
      { id: 4, name: 'Santander', balance: 456, type: 'CHECKING' as const, color: '#E60000' },
      { id: 5, name: 'Inter', balance: 789, type: 'CASH' as const, color: '#FFB800' },
    ],
  };
}
