import { api } from '../api';

type SignInParams = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
};

export async function signIn(params: SignInParams) {
  const { data } = await api.post<SignInResponse>('/auth/sign-in', params);
  return data;
}
