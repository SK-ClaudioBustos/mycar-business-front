import { Layout } from '@components/Layout/Layout';
import { useAlertStorage } from "@store/alert.store";
import '@styles/App.css';
import '@styles/global.css';
import { lazy } from 'react';
const Content = lazy(() => import("@components/Content/Content.tsx"));
const Alert = lazy(() => import("@utils/Alert"));

function App() {
  const alert = useAlertStorage((state) => state.alert);

  return (
    <Layout>
      <Content />
      <Alert alert={alert} />
    </Layout>
  )
}

export default App;
