import { useContext } from 'react';
import { PostContext } from '../context/context';

const useAppContext = () => useContext(PostContext);

export default useAppContext;
