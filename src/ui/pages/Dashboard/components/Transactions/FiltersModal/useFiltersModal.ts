import { useState } from 'react';

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) => (prevState === bankAccountId ? null : bankAccountId));
  }

  function handleChangeYear(step: 1 | -1) {
    setSelectedYear((prevState) => {
      const newYear = prevState + step;
      const currentYear = new Date().getFullYear();

      if (newYear > currentYear) {
        return prevState;
      }

      return newYear;
    });
  }

  return {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  };
}
