import { QueryClient, QueryClientProvider } from 'react-query';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ReactQueryDevtools } from 'react-query/devtools';
import Config from './Config';
import Router from './router';

const App = (): JSX.Element => (
  <QueryClientProvider client={new QueryClient()}>
    <ProSidebarProvider>
      <Router />
      {Config.nodeEnv === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : ''}
    </ProSidebarProvider>
  </QueryClientProvider>
);

export default App;
