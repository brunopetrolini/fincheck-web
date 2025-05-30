import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { api } from '@/app/services/api';

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

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await api.post('/auth/sign-up', data);
  });

  return { handleSubmit, register, errors };
}
