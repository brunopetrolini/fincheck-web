import { api } from '../api';

type MeResponse = {
  name: string;
  email: string;
};

export async function me() {
  const { data } = await api.get<MeResponse>('/users/me');
  return data;
}
