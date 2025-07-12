import { useState } from 'react';

export function useAccountsController() {
  const [isShowBalance, setIsShowBalance] = useState(true);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  function toggleShowBalance() {
    setIsShowBalance((prev) => !prev);
  }
  const balance = { isShowBalance, toggleShowBalance };
  const slider = { isFirstSlide, setIsFirstSlide, isLastSlide, setIsLastSlide };

  return { slider, balance };
}
