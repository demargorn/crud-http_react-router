import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { URL } from '../../pages/Posts/Posts';
import './CreatePost.css';

const CreatePost = () => {
   const [value, setValue] = useState('');
   const navigate = useNavigate();

   const handlerClose = () => navigate('/');

   const handlerChangeValue = (e) => setValue(e.target.value);

   const handlerFormSubmit = async (e) => {
      e.preventDefault();

      try {
         await fetch(`${URL}/posts`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               id: 0,
               content: value,
            }),
         });
      } catch (error) {
         console.log(error);
      }

      setValue('');
      handlerClose();
   };

   return (
      <article className='create-post'>
         <div className='card-header create-post-header'>
            <button className='btn create-post-header-btn'>Публикация</button>
            <button className='btn create-post-header-btn'>Фото/видео</button>
            <button className='btn create-post-header-btn'>Прямой эфир</button>
            <button className='btn create-post-header-btn'>Ещё</button>
            <button
               type='button'
               className='btn-close'
               aria-label='Close'
               onClick={handlerClose}
            ></button>
         </div>
         <form className='create-post-body' onSubmit={handlerFormSubmit}>
            <div className='input-div'>
               <img src='/avatar.svg' className='card-img-top create-post-img' alt='avatar' />
               <input
                  type='text'
                  value={value}
                  onChange={handlerChangeValue}
                  className='card-text create-post-input'
               />
            </div>
            <div className='create-post-bottom'>
               <Button>Опубликовать</Button>
            </div>
         </form>
      </article>
   );
};

export default CreatePost;
