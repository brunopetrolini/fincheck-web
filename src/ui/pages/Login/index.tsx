import { Link } from 'react-router-dom';

import { Input } from '@/ui/components/Input';

export function Login() {
  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">Entre em sua conta</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Novo por aqui?</span>
          <Link to="/register" className="font-medium text-teal-900">
            Crie sua conta
          </Link>
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit" className="mt-2">
          Entrar
        </button>
      </form>
    </div>
  );
}
