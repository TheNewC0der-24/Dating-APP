import { useState } from 'react';
import './App.css';

import { Container } from '@mui/material';

import InputField from './Components/InputField';

import axios from 'axios';

function App() {

  const [usersNum, setUsersNum] = useState("");

  const handleSearch = async () => {
    // console.log(usersNum);
    const response = await axios.get(`https://randomuser.me/api/?results=${usersNum}`);
    console.log(response.data.results);
    setUsersNum("");
  }

  return (
    <Container maxWidth="lg">
      <InputField usersNum={usersNum} setUsersNum={setUsersNum} handleSearch={handleSearch} />
    </Container>
  )
}

export default App;
