import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formData = z.object({
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

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formData>>({
    resolver: zodResolver(formData),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data);
  });

  return { handleSubmit, register, errors };
}
