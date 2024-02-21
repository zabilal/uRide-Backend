const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['getUsers', 'manageUsers']);

export default {
  roles,
  roleRights,
};