import { createContext, useState, useEffect } from 'react';

const URL = 'http://localhost:7070';
const PostContext = createContext();

const ContextProvider = ({ children }) => {
   const [posts, setPosts] = useState([]);

   const fetchData = async () => {
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
   };

   useEffect(() => {
      fetchData();
   }, []);

   return <PostContext.Provider value={{ URL, posts, fetchData }}>{children}</PostContext.Provider>;
};

export { PostContext, ContextProvider };
