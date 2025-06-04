import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './app/contexts/AuthContext';
import { Router } from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
