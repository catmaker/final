import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './routes';
// import AppLayout from './layouts/AppLayout';
// import Home from './pages/Home';
// import AppLayout from './layouts/AppLayout';

const RouterObject = createBrowserRouter(RouterInfo);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={RouterObject} />
    </div>
  );
};

export default App;
