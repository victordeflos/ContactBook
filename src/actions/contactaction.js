/** @format */
import { CREATE_CONTACT } from '../constent/types';

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};
