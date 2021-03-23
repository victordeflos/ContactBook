/** @format */
import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELTE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_ALL,
} from '../constent/types';

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
export const deleteContact = (id) => ({
  type: DELTE_CONTACT,
  payload: id,
});
// SELECT ALL CONTACT
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});
export const deleteAllContact = () => ({
  type: DELETE_ALL,
});
