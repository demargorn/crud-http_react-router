import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import Posts from './pages/Posts/Posts';
import CreatePost from './components/CreatePost/CreatePost';
import Post from './components/Post/Post';
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
            element: <Post />,
         },
         {
            path: '/posts/new',
            element: <CreatePost />,
         },
         {
            path: '/posts/edit',
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
      <RouterProvider router={router} />
   </StrictMode>
);
