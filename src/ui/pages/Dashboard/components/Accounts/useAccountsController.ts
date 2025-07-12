import { useState } from 'react';

import { useWindowWidth } from '@/app/hooks/useWindowWidth';

export function useAccountsController() {
  const windowWidth = useWindowWidth();

  const [isShowBalance, setIsShowBalance] = useState(true);
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  function toggleShowBalance() {
    setIsShowBalance((prev) => !prev);
  }

  return { sliderState, setSliderState, isShowBalance, toggleShowBalance, windowWidth };
}
