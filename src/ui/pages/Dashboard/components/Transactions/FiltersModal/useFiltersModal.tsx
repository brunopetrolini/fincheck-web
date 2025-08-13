import { useState } from 'react';

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId(bankAccountId);
  }

  return {
    selectedBankAccountId,
    handleSelectBankAccount,
  };
}
