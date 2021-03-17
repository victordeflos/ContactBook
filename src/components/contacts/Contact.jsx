import React from 'react'
import { useSelector } from 'react-redux'

export const Contact = () => {
  const contacts = useSelector((state) => state.contacts)
  console.log(contacts);
    return (
        <div>
            <table class="table shadow table-info table-striped">
           
 
  <thead>
    <tr>
           <th>   
                <div className="custom-control custom-chackbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label"></label>

                </div>
                </th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
            <tbody>
           {contacts.map((contact) => {
              return (<tr>
                <th scope="row">1</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>)
            })}
                    </tbody>
                    
                
                </table>
                

        </div>
    )
}
