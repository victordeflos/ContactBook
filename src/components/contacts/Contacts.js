/** @format */

import React from 'react';
import Avatar from 'react-avatar';
import { deleteContact } from '../../actions/contactaction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Contacts = ({ contact, SelectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <th scope='row'>
        <div className='custom-control custom-chackbox'>
          <input
            checked={SelectAll}
            type='checkbox'
            className='custom-control-input'
          />
          <label className='custom-control-label'></label>
        </div>
      </th>

      <td>
        <Avatar className='mr-2' name={name} size='35' round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <span className='material-icons'>edit</span>
        </Link>

        <span
          className='material-icons'
          onClick={() => {
            dispatch(deleteContact(id));
          }}>
          remove_circle
        </span>
      </td>
    </tr>
  );
};
