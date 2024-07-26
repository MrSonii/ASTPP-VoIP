import React from 'react'

//css import
import "./input.css";

function Input(props) {
  const { htmlFor, label, name, value, onChange, placeholder, forgotPass=false, type } = props;
  return (
    <>
      <label htmlFor={htmlFor} className='input-text-label'>{label}{forgotPass ? <span className='gray pointer'>Forgot password</span> : ""}</label>
      <input className='input-text-field' type={type} name={name} id={htmlFor} value={value} onChange={onChange} placeholder={placeholder}/>
    </>
  )
}

export default Input