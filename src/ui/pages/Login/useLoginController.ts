import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useAuth } from '@/app/hooks/useAuth';
import { AuthService } from '@/app/services/AuthService';
import type { SignInParams } from '@/app/services/AuthService/sign-in';

const formSchema = z.object({
  email: z.string().nonempty({ message: 'E-mail é obrigatório' }).email({ message: 'E-mail inválido' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});

type FormData = z.infer<typeof formSchema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignInParams) => AuthService.signIn(data),
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      signIn();
    } catch {
      toast.error('Oops! E-mail ou senha inválidos.');
    }
  });

  return { handleSubmit, register, errors, isLoading: isPending };
}
