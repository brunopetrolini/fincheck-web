import { api } from '../api';

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
};

type SignUpResponse = {
  accessToken: string;
};

export async function signUp(params: SignUpParams) {
  const { data } = await api.post<SignUpResponse>('/auth/sign-up', params);
  return data;
}
