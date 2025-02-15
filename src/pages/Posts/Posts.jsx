import { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';
import './Posts.css';

export const URL = 'http://localhost:7070';

const Posts = () => {
   const [posts, setPosts] = useState([]); // посты

   useEffect(() => {
      (async function () {
         try {
            const response = await fetch(`${URL}/posts`);

            if (!response.ok) {
               throw new Error('fetch error');
            }

            const data = await response.json();
            setPosts(data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   console.log(posts);

   return (
      <>
         {posts
            .toSorted((a, b) => b.id - a.id)
            .map((p) => (
               <Post key={p.id} created={p.created} message={p.content} />
            ))}
      </>
   );
};

export default Posts;
