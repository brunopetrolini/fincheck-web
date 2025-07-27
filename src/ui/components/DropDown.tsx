import {
  Menu,
  MenuButton,
  type MenuButtonProps,
  MenuItem,
  type MenuItemProps,
  MenuItems,
  type MenuItemsProps,
} from '@headlessui/react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type BaseProps = {
  children: ReactNode;
};

type ItemProps = { className?: string; onClick: () => void } & BaseProps & MenuItemProps;

function DropDownMenu({ children }: BaseProps) {
  return <Menu>{children}</Menu>;
}

function DropDownTrigger({ children, className, ...props }: BaseProps & MenuButtonProps) {
  return (
    <MenuButton className={cn('outline-none', className)} {...props}>
      {children}
    </MenuButton>
  );
}

function DropDownContent({ children, className, ...props }: BaseProps & MenuItemsProps) {
  return (
    <MenuItems
      className={cn(
        'mt-1 flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-2 text-sm text-gray-800 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </MenuItems>
  );
}

function DropDownItem({ children, className, onClick, ...props }: ItemProps) {
  return (
    <MenuItem {...props}>
      <button
        className={cn(
          'flex min-h-12 items-center justify-start rounded-lg p-2 text-left transition-all hover:bg-gray-50',
          className,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </MenuItem>
  );
}

export const DropDown = {
  Menu: DropDownMenu,
  Trigger: DropDownTrigger,
  Content: DropDownContent,
  Item: DropDownItem,
};
