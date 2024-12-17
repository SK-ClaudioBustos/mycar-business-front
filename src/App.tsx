import { NavBar } from '@components/Navbar/NavBar';
import '@styles/App.css';
import '@styles/global.css';

function App() {
  // const { loading, error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);
  return (
    <>
      <NavBar />
    </>
  )
}

export default App;
