import { useDashboard } from '../../components/DashboardContext/useDashboard';

export function useNewTransactionModalController() {
  const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionModalType } = useDashboard();

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionModalType,
  };
}
