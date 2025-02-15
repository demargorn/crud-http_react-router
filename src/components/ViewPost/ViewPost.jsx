import { useNavigate, useParams } from 'react-router';
import { URL } from '../../pages/Posts/Posts';
import Button from '../Button/Button';

const ViewPost = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   console.log(id);

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
            <h4 className='card-title'>gjrfskfjb</h4>
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
