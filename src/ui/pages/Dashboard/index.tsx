import { useAuth } from '@/app/hooks/useAuth';
import { Button } from '@/ui/components/Button';

export function Dashboard() {
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Dashboard Page</h1>

      <Button onClick={signOut}>Sair</Button>
    </div>
  );
}
