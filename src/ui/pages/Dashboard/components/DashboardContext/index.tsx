import { createContext, type ReactNode, useCallback, useState } from 'react';

type NewTransactionModalType = 'income' | 'expense';

type DashboardContextValue = {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
  isNewTransactionModalOpen: boolean;
  newTransactionModalType: NewTransactionModalType | null;
  openNewTransactionModal: (type: NewTransactionModalType) => void;
  closeNewTransactionModal: () => void;
};

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);
  const [newTransactionModalType, setNewTransactionModalType] = useState<NewTransactionModalType | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prev) => !prev);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: NewTransactionModalType) => {
    setNewTransactionModalType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionModalType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
        isNewTransactionModalOpen,
        newTransactionModalType,
        openNewTransactionModal,
        closeNewTransactionModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
