/** @format */

import React from 'react';

export const Contacts = (props) => {
  return (
    <tr>
      <td scope='row'>
        <div className='custom-control custom-chackbox'>
          <input type='checkbox' className='custom-control-input' />
          <label className='custom-control-label'></label>
        </div>
      </td>

      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
    </tr>
  );
};
