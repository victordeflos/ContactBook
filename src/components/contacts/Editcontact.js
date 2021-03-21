/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getContact } from '../../actions/contactaction';
import { useHistory, useParams } from 'react-router-dom';

export const Editcontact = () => {
  let { id } = useParams();
  useEffect(() => {
    dispatch(getContact(id));
  }, []);
  let history = useHistory();
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Edit_contact</div>
        <div className='card-body'>
          <form>
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
