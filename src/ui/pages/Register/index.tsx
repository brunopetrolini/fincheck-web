import { Link } from 'react-router-dom';

import { Button } from '@/ui/components/Button';
import { Input } from '@/ui/components/Input';

export function Register() {
  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">Crie sua conta</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Já possui uma conta?</span>
          <Link to="/login" className="font-medium text-teal-900">
            Fazer login
          </Link>
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <Input name="name" type="text" placeholder="Nome" autoCapitalize="words" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
