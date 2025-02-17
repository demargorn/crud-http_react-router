import { useNavigate, useParams } from 'react-router';
import Button from '../Button/Button';
import useAppContext from '../../hooks/useAppContext';

const ViewPost = () => {
   const { id } = useParams();
   const { URL } = useAppContext();
   const navigate = useNavigate();

   const fetchDeleteData = async (id) => {
      try {
         await fetch(`${URL}/posts/${id}`, {
            method: 'DELETE',
         });
      } catch (error) {
         console.log(error);
      }
   };

   const handleDeleteClick = () => {
      fetchDeleteData(id);
      navigate('/');
   };

   return (
      <article className='card post'>
         <div className='card-header post-header'>
            <img src='/avatar.svg' className='card-img-top avatar' alt='...' />
            <div className='card-text-div'>
               <p className='card-text-name'>Pavel Durov</p>
               <p className='card-text-main'>пользователь</p>
            </div>
         </div>
         <div className='card-body'>
            <h4 className='card-title'>{}</h4>
         </div>
         <div className='post-bottom'>
            <button className='post-button'>Нравится</button>
            <button className='post-button'>Коммент</button>
         </div>
         <div className='card-bottom post-bottom'>
            <Button onClick={() => navigate('/posts/edit')}>Изменить</Button>
            <Button color='#B04546' onClick={() => handleDeleteClick(id)}>
               Удалить
            </Button>
         </div>
      </article>
   );
};

export default ViewPost;
