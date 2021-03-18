/** @format */

import React from 'react';
import Avatar from 'react-avatar';


export const Contacts = ({ contact }) => {
  // Distructuring           Props

  const { name, phone, email } = contact;
  return (
    <tr>
      <td scope='row'>
        <div className='custom-control custom-chackbox'>
          <input type='checkbox' className='custom-control-input' />
          <label className='custom-control-label'></label>
        </div>
      </td>


      <td><Avatar className="mr-2" name={name} size="35" round={true} />
        {name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <a href="#">
        <span className="material-icons">edit</span>
      </a>
      
        <a href="#">
          <span className="material-icons">remove_circle</span>
        </a>
      </td>
    </tr>
  );
};
