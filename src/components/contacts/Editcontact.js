/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactaction';
import { useHistory, useParams } from 'react-router-dom';

export const Editcontact = () => {
  let { id } = useParams();

  let history = useHistory();

  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setphone(contact.phone);
      setemail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  function onUpdateContact(e) {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updateContact(update_contact));
    history.push('/');
  }

  return (
    <div>
      <div className='card border-0 shadow'>
        <div className='card-header'>Edit_contact</div>
        <div className='card-body'>
          <form onSubmit={(e) => onUpdateContact(e)}>
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
            <button className='btn btn-danger' type='submit'>
              Edit_contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
