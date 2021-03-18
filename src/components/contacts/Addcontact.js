/** @format */

import React, { useState } from 'react';

export const Addcontact = () => {
  const [name, setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email, setEmail] = useState("");

  function createContact(e) {
    e.preventDefault();
    console.log("name:", name);
    console.log("phone:", phone);
    console.log("email:", email);
  }
  
  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>New_contact</div>
        <div className='card-body'>


          <form onSubmit={(e)=>createContact(e)}>
            
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder="Enter Phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-info" type="submit">Add_contact</button>
          </form>
       </div>
     </div>
  </div>
  );
};
