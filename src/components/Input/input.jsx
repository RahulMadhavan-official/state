import './input.css';

const Input =({className ,type='number' ,placeholder,onChange,value}) =>{
    return (
    <input
     className={`input-component ${className}`}
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      />
      )
}
export default Input;