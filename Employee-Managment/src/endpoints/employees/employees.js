const apiURL = import.meta.env.VITE_API_URL;

export const Employee = {
  createEmployee: {
    url: `${apiURL}/api/create`,
    method: 'POST'
  },
  showEmployees: {
    url: `${apiURL}/api/show`,
    method: 'GET'
  },
  updateEmployee: {
    url: `${apiURL}/api/update`,
    method: 'PUT'
  },
  deleteEmployee: {
    url: `${apiURL}/api/delete`,
    method: 'DELETE'
  }
  };