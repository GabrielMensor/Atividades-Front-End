import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './routes/Home';
import Chat from './routes/Chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/chat/:name',
        element: <Chat /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
