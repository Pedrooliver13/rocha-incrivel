import Routes from 'routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalProvider } from 'hooks/use-global';

import GlobalStyled from 'styles/global';

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyled />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GlobalProvider>
  );
};

export default App;
