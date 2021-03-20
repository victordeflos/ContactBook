/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

export const Editcontact = () => {
  let history = useHistory();

  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');

  const dispatch = useDispatch();

  function createContact(e) {
    e.preventDefault();
    console.log('name:', name);
    console.log('phone:', phone);
    console.log('email:', email);
    const shortid = require('shortid');
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(Editcontact(new_contact));
    history.push('/');
  }

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>New_contact</div>
        <div className='card-body'>
          <form onSubmit={(e) => createContact(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Phone'
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <button className='btn btn-info' type='Submit'>
              Add_contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
