import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAppContext from '../../hooks/useAppContext';
import Button from '../Button/Button';

const ViewPost = () => {
   const [info, setInfo] = useState({}); // данные карточки
   const { id } = useParams();
   const { URL } = useAppContext();
   const navigate = useNavigate();

   const { post } = info;

   const fetchDeleteData = async () => {
      try {
         await fetch(`${URL}/posts/${id}`, {
            method: 'DELETE',
         });
      } catch (error) {
         console.log(error);
      }
   };

   const fetchInfoData = async () => {
      try {
         const response = await fetch(`${URL}/posts/${id}`);

         if (!response.ok) {
            throw new Error('fetch error');
         }

         const data = await response.json();
         setInfo(data);
      } catch (error) {
         console.log(error);
      }
   };

   const handleDeleteClick = () => {
      fetchDeleteData(id);
      navigate('/');
   };

   useEffect(() => {
      fetchInfoData();
   }, []);

   return (
      post && (
         <article className='card post'>
            <div className='card-header post-header'>
               <img src='/avatar.svg' className='card-img-top avatar' alt='...' />
               <div className='card-text-div'>
                  <p className='card-text-name'>Pavel Durov</p>
                  <p className='card-text-main'>пользователь</p>
               </div>
            </div>
            <div className='card-body'>
               <h4 className='card-title'>{post.content}</h4>
            </div>
            <div className='post-bottom'>
               <button className='post-button'>Нравится</button>
               <button className='post-button'>Коммент</button>
            </div>
            <div className='card-bottom post-bottom'>
               <Button onClick={() => navigate(`/posts/${id}/edit`)}>Изменить</Button>
               <Button color='#B04546' onClick={() => handleDeleteClick(id)}>
                  Удалить
               </Button>
            </div>
         </article>
      )
   );
};

export default ViewPost;
