import { Outlet, useNavigate } from 'react-router';
import Button from '../components/Button/Button';
import './Layout.css';

const Layout = () => {
   const navigate = useNavigate();

   return (
      <main className='container-xl main-container'>
         <header className='card-body header'>
            <Button onClick={() => navigate('/posts/new/')}>Создать пост</Button>
         </header>
         <section className='post-container'>
            <Outlet />
         </section>
      </main>
   );
};

export default Layout;
