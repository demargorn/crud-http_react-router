import { useNavigate, useParams } from 'react-router';
import { URL } from '../../pages/Posts/Posts';
import Button from '../Button/Button';
import './Post.css';

const Post = ({ text }) => {
   const { id } = useParams();
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
      console.log(id);
      navigate('/');
   };

   return (
      <article className='card post'>
         <div className='card-header post-header'>
            <img src='/avatar.svg' className='card-img-top avatar' alt='...' />
            <div className='card-text-div'>
               <p className='card-text-name'>Ilnaz Gilyazov</p>
               <p className='card-text-main'>Основатель группы</p>
            </div>
         </div>
         <div className='card-body'>
            <h4 className='card-title'>{text}</h4>
         </div>
         <hr />
         <div className='card-bottom post-bottom'>
            <Button onClick={() => navigate('/posts/edit')}>Изменить</Button>
            <Button color='#B04546' onClick={() => handleDeleteClick()}>
               Удалить
            </Button>
         </div>
      </article>
   );
};

export default Post;
