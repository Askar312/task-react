import UserContextProvider from './contexts/MainContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoutes from './MainRoutes';


function App() {
  return (
  <>
  <UserContextProvider>

    <MainRoutes />
  </UserContextProvider>
  </>
  );
}

export default App;
