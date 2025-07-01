import React from 'react';
import { useState } from 'react';
import './form.css'



export function MyForm() {
  
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='form_design'>
      <label>Enter your Firstname:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label> <br/><br/>
      <label>Enter your Secondname:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label> <br/><br/>
      <label>Enter your email:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label> <br/><br/>
       <label>Enter your password:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label> <br/><br/>
       <input type="submit" /> 
    </form>
  )
}



