import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import Post from '../../components/Post/Post';
import './Posts.css';

const Posts = () => {
   const { posts, fetchData } = useAppContext();

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <>
         {posts
            .toSorted((a, b) => b.id - a.id)
            .map((p) => (
               <Post key={p.id} postId={p.id} created={p.created} message={p.content} />
            ))}
      </>
   );
};

export default Posts;
