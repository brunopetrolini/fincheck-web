import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useAuth } from '@/app/hooks/useAuth';
import { AuthService } from '@/app/services/AuthService';
import type { SignUpParams } from '@/app/services/AuthService/sign-up';

const formSchema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  email: z.string().nonempty({ message: 'E-mail é obrigatório' }).email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .nonempty({ message: 'Senha é obrigatória' })
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'A senha deve conter pelo menos uma letra maiúscula',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'A senha deve conter pelo menos um número',
    })
    .refine((password) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password), {
      message: 'A senha deve conter pelo menos um caractere especial',
    }),
});

type FormData = z.infer<typeof formSchema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignUpParams) => AuthService.signUp(data),
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signIn(accessToken);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 409) {
        toast.error('Oops! Já existe uma conta com este e-mail.');
      } else {
        toast.error('Erro ao criar conta. Por favor, tente novamente.');
      }
    }
  });

  return { handleSubmit, register, errors, isLoading: isPending };
}
