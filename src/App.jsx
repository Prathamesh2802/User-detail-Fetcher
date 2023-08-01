// App.js
import { useState, useEffect } from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchQuery) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <>
    <h1 className='text-center'>Users Data Fetcher</h1>
    <div>
      <SearchBar onSearch={handleSearch} />
      <Table users={filteredUsers.length > 0 ? filteredUsers : users} />
    </div>
    </>
  );
};

export default App;
