import { Outlet } from 'react-router-dom';

import illustration from '@/assets/illustration.png';

import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div>
      <div className="flex h-screen select-none">
        <div className="flex h-full w-full flex-col items-center justify-center p-8 lg:w-1/2">
          <Logo className="h-6 text-gray-500" />

          <div className="mt-16 w-full max-w-md">
            <Outlet />
          </div>
        </div>

        <div className="relative mx-8 hidden h-full w-1/2 items-center justify-center py-8 lg:flex">
          <img src={illustration} className="h-full max-h-[960px] w-full max-w-[656px] rounded-[32px] object-cover" />

          <div className="absolute bottom-8 w-full max-w-[656px] rounded-b-[32px] bg-white px-10 py-12">
            <Logo className="h-8 text-teal-900" />

            <p className="mt-6 text-xl font-medium text-gray-800">
              Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
