import { useState } from 'react';
import './App.css';

import { Box, Container, Divider } from '@mui/material';

import InputField from './Components/InputField';

import axios from 'axios';
import RandomUsers from './Components/RandomUsers';
import Matches from './Components/Matches';

function App() {

  const [usersNum, setUsersNum] = useState("");
  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // console.log(usersNum);
    setLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=${usersNum}`);
    // console.log(response.data.results);
    setUserData(response.data.results);
    setLoading(false);
    setUsersNum("");
  }

  return (
    <Container maxWidth="lg">
      <InputField usersNum={usersNum} setUsersNum={setUsersNum} handleSearch={handleSearch} />

      <Divider sx={{ mt: 3, mb: 3 }} />

      <Box maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", gap: "5rem", flexWrap: "wrap" }}>
        <RandomUsers userData={userData} loading={loading} />
        <Matches />
      </Box>
    </Container>
  )
}

export default App;
