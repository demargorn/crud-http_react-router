import './Button.css';

const Button = ({ color = '#4469AE', onClick, children }) => {
   return (
      <button
         type='submit'
         style={{ backgroundColor: color }}
         onClick={onClick}
         className='btn btn-info button-component'
      >
         {children}
      </button>
   );
};

export default Button;
