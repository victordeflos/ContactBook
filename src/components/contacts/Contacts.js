/** @format */

import React from 'react';

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

      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};
