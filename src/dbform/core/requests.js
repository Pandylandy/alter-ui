import axios from 'axios';
import { API_URLS } from '../../config';
import { urlConverter } from '../../base/functions';


const Structures = {
  getAll: () => axios.get(API_URLS.STRUCTURES),
  add: data => axios.post(API_URLS.STRUCTURES, { ...data }),
  delete: id => axios.delete(`${API_URLS.STRUCTURES}/${id}`),
  edit: (id, data, params, condition) => axios.put(`${API_URLS.STRUCTURES}/${id}`, { data, params, condition }),
};

const Settings = {
  getAll: () => axios.get(API_URLS.SETTINGS),
  getDBFields: () => axios.get(API_URLS.DB_FIELDS),
};

const Users = {
  getUsers: () => axios.get(API_URLS.USERS),
  whoAmI: () => axios.get(API_URLS.WHOAMI),
};

const Records = {
  getAllbyUser: (database, table, user) =>
    axios.get(urlConverter(API_URLS.RECORDS, { database, table, user })),
};

export { Structures, Settings, Records, Users };
