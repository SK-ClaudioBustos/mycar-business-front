import { createRoot } from 'react-dom/client';
import { AppRouter } from './routes/AppRouter';
import ErrorBoundary from '@components/Layout/ErrorBoundary';
import { Error } from '@utils/Error';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<Error label="ErrorBoundary: unknow error" />}>
    <AppRouter />
  </ErrorBoundary>
)
