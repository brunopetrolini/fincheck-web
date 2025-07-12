import { useState } from 'react';

export function useAccountsController() {
  const [isShowBalance, setIsShowBalance] = useState(true);
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  function toggleShowBalance() {
    setIsShowBalance((prev) => !prev);
  }

  return { sliderState, setSliderState, isShowBalance, toggleShowBalance };
}
