import { Logo } from '@/ui/components/Logo';
import { UserMenu } from '@/ui/components/UserMenu';

import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <div className="flex h-screen w-screen select-none flex-col gap-2 p-4 lg:gap-4 lg:p-8 lg:pt-6">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <main className="flex flex-1 flex-col gap-4 lg:flex-row">
        <Accounts />
        <Transactions />
      </main>
    </div>
  );
}
