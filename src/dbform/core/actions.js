import { ADD_STRUCTURE, ADD_STRUCTURES, EDIT_STRUCTURE, DELETE_STRUCTURE, TRIGGER_MODAL, ADD_SETTINGS } from './constants';

export const addStructures = structures => ({
  type: ADD_STRUCTURES, structures,
});

export const addStructure = structure => ({
  type: ADD_STRUCTURE, structure,
});

export const deleteStructure = id => ({
  type: DELETE_STRUCTURE, id,
});

export const showModal = (visible, id) => ({
  type: TRIGGER_MODAL, visible, id,
});

export const editStructure = structure => ({
  type: EDIT_STRUCTURE, structure,
});

export const addSettings = settings => ({
  type: ADD_SETTINGS, settings,
});