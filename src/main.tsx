import { createRoot } from 'react-dom/client';
import { AppRouter } from './routes/AppRouter';

createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
