import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import { URL } from '../../pages/Posts/Posts';
import './EditPost.css';

const EditPost = () => {
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
               id: 1,
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
      <div className='card'>
         <div className='card-header edit-card-header'>
            <h5 className='card-title edit-card-title'>Редактировать публикацию</h5>
            <button
               type='submit'
               aria-label='Close'
               onClick={() => navigate('/')}
               className='btn-close'
            />
         </div>
         <form className='create-post-body' onSubmit={handlerFormSubmit}>
            <div className='div-input'>
               <img src='/avatar.svg' className='card-img-top create-post-img' alt='avatar' />
               <input
                  type='text'
                  value={value}
                  onChange={handlerChangeValue}
                  className='card-text create-post-input'
               />
            </div>
            <div className='edit-card-footer'>
               <button type='button' className='btn btn-secondary edit-card-footer-btn'>
                  Фото/видео
               </button>
               <button type='button' className='btn btn-secondary edit-card-footer-btn'>
                  Отметить друзей
               </button>
               <button type='button' className='btn btn-secondary edit-card-footer-btn'>
                  Чувства/действия
               </button>
               <button type='button' className='btn btn-secondary edit-card-footer-btn'>
                  Отметить посещение
               </button>
               <button type='button' className='btn btn-secondary edit-card-footer-btn'>
                  GIF
               </button>
            </div>
            <div className='card-header edit-card-bottom'>
               <Button>Сохранить</Button>
            </div>
         </form>
      </div>
   );
};

export default EditPost;
