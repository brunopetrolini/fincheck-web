import { Link } from 'react-router-dom';

import { Button } from '@/ui/components/Button';
import { Input } from '@/ui/components/Input';

import { useLoginController } from './useLoginController';

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

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

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="email" placeholder="E-mail" {...register('email')} error={errors.email?.message} />
        <Input type="password" placeholder="Senha" {...register('password')} error={errors.password?.message} />

        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
