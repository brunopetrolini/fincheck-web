import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { type ReactNode, useState } from 'react';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  title: string;
  rightAction?: ReactNode;
};

export function Modal({ children, open, title, rightAction }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop transition className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <DialogPanel
        transition
        className="fixed left-1/2 top-1/2 m-2 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]"
      >
        <header className="flex h-12 select-none items-center justify-between text-gray-800">
          <button className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-gray-50">
            <Cross2Icon className="h-6 w-6" />
          </button>

          <span className="text-lg font-bold tracking-[-1px]">{title}</span>

          <div className="flex h-12 w-12 items-center justify-center">{rightAction}</div>
        </header>

        <div>{children}</div>
      </DialogPanel>
    </Dialog>
  );
}
