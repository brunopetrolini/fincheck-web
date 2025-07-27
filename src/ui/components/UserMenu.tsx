import { ExitIcon } from '@radix-ui/react-icons';

import { useAuth } from '@/app/hooks/useAuth';

import { DropDown } from './DropDown';

export function UserMenu() {
  const { signOut } = useAuth();

  return (
    <DropDown.Menu>
      <DropDown.Trigger className="h-12 w-12 rounded-full bg-teal-0 text-sm font-medium tracking-[-0.5px] text-teal-900 transition-colors hover:border-2 hover:border-teal-900/10 focus:border-2 focus:border-teal-900/10">
        BP
      </DropDown.Trigger>

      <DropDown.Content anchor="bottom end">
        <DropDown.Item onClick={signOut} className="w-32 justify-between">
          Sair
          <ExitIcon className="h-4 w-4 text-gray-800" />
        </DropDown.Item>
      </DropDown.Content>
    </DropDown.Menu>
  );
}
