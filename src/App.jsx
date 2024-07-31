import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Chatbot from './Pages/Chatbot';
import Analyser from './Pages/Analyser';
import RootLayout from './Pages/RootLayout';
import DataTable from './Pages/DataTable';
const router = createBrowserRouter([
  {
  
    path: '/',
    element: <RootLayout/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'chatbot/:id', element: <Chatbot /> },
  { path: 'analyser', element: <Analyser /> },
  

    ],

  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
