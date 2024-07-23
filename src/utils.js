// src/utils.js
export const fetchData = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
  };
  
  export const authenticateUser = async (username, password) => {
    const data = await fetchData();
    return data.users.find(user => user.username === username && user.password === password);
  };
  
  export const getEntries = async () => {
    const data = await fetchData();
    return data.entries;
  };
  