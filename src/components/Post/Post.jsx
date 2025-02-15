import './Post.css';

const Post = ({ message, created }) => {
   function timeAgo(timestamp) {
      const now = Date.now();
      const seconds = Math.floor((now - timestamp) / 1000);
      let interval = Math.floor(seconds / 31536000);

      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
         return `${interval} дней назад`;
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
         return `${interval} часов назад`;
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
         return `${interval} минут назад`;
      }
      return 'только что';
   }

   return (
      <article className='card post'>
         <div className='card-header post-header'>
            <img src='/avatar.svg' className='card-img-top avatar' alt='...' />
            <div className='card-text-div'>
               <p className='card-text-name'>Pavel Durov</p>
               <p className='card-text-main'>пользователь * {timeAgo(created)}</p>
            </div>
         </div>
         <div className='card-body'>
            <h4 className='card-title'>{message}</h4>
         </div>
         <div className='post-bottom'>
            <button className='post-button'>Нравится</button>
            <button className='post-button'>Коммент</button>
         </div>
         <form className='create-post-body'>
            <div className='div-input'>
               <img src='/avatar.svg' className='card-img-top create-post-img' alt='avatar' />
               <input
                  type='text'
                  placeholder='напишите комментарий...'
                  className='card-text post-input'
               />
            </div>
         </form>
      </article>
   );
};

export default Post;
