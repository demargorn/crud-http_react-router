import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ContextProvider } from './context/context';
import Layout from './layout/Layout';
import Posts from './pages/Posts/Posts';
import CreatePost from './components/CreatePost/CreatePost';
import ViewPost from './components/ViewPost/ViewPost';
import EditPost from './components/EditPost/EditPost';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            exact: true,
            element: <Posts />,
         },
         {
            path: '/posts/:id',
            element: <ViewPost />,
         },
         {
            path: '/posts/new',
            element: <CreatePost />,
         },
         {
            path: '/posts/:id/edit',
            element: <EditPost />,
         },
         {
            path: '*',
            element: <span className='h1'>Страница не найдена</span>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ContextProvider>
         <RouterProvider router={router} />
      </ContextProvider>
   </StrictMode>
);
