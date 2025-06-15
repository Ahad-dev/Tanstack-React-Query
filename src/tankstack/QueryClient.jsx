import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const queryClient = new QueryClient();

function QueryClientProviderComponent({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryClientProviderComponent;