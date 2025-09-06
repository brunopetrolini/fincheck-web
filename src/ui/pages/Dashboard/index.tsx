import { Logo } from '@/ui/components/Logo';
import { UserMenu } from '@/ui/components/UserMenu';

import { Accounts } from './components/Accounts';
import { DashboardProvider } from './components/DashboardContext';
import { FloatActionButton } from './components/FloatActionButton';
import { Transactions } from './components/Transactions';
import { NewAccountModal } from './modals/NewAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex h-screen w-screen select-none flex-col gap-2 p-4 lg:gap-4 lg:p-8 lg:pt-6">
        <header className="flex h-12 items-center justify-between">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex max-h-full flex-1 flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Accounts />
          </div>

          <div className="w-full lg:w-1/2">
            <Transactions />
          </div>
        </main>

        <FloatActionButton />

        <NewAccountModal />
        <NewTransactionModal />
      </div>
    </DashboardProvider>
  );
}
