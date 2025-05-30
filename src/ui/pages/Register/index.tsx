import { Link } from 'react-router-dom';

import { Button } from '@/ui/components/Button';
import { Input } from '@/ui/components/Input';

import { useRegisterController } from './useRegisterController';

export function Register() {
  const { handleSubmit, register, errors } = useRegisterController();

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

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          autoCapitalize="words"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="E-mail"
          autoCorrect="off"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input type="password" placeholder="Senha" {...register('password')} error={errors.password?.message} />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
