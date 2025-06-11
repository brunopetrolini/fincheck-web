import { Transition } from '@headlessui/react';

import { Logo } from './Logo';
import { Spinner } from './Spinner';

type LaunchScreenProps = {
  isLoading?: boolean;
};

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed left-0 top-0 grid h-full w-full place-items-center bg-teal-900">
        <div className="flex flex-col items-center gap-3">
          <Logo className="h-10 text-gray-300" />
          <Spinner className="fill-gray-300 text-teal-800" />
        </div>
      </div>
    </Transition>
  );
}
