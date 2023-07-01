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
  const [matchData, setMatchData] = useState([]);

  const [userName, setUserName] = useState();
  const [userLocation, setUserLocation] = useState();

  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingMatches, setLoadingMatches] = useState(false);

  const handleSearch = async () => {
    setLoadingUsers(true);
    const response = await axios.get(`https://randomuser.me/api/?results=${usersNum}`);
    setUserData(response.data.results);
    setLoadingUsers(false);
    setUsersNum("");
  }

  const findMatch = async (gender, name, location) => {
    setLoadingMatches(true);
    setUserLocation(location.latitude, location.longitude);
    const resp = await axios.get(`https://randomuser.me/api/?gender=${gender === "male" ? "female" : "male"}&results=100`);
    const res = resp.data.results.map((user) => {
      const x1 = user.location.coordinates.latitude;
      const x2 = location.latitude;
      const y1 = user.location.coordinates.longitude;
      const y2 = location.longitude;

      const dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

      return {
        ...user,
        distance: dist
      }
    });
    res.sort((a, b) => a.distance - b.distance);
    res.length = 5;
    setMatchData(res);
    setUserName(name.first + " " + name.last)
    setLoadingMatches(false);
  };

  return (
    <Container maxWidth="lg">
      <InputField usersNum={usersNum} setUsersNum={setUsersNum} handleSearch={handleSearch} />

      <Divider sx={{ mt: 3, mb: 3 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: "5rem", flexWrap: "wrap" }}>
          <Box>
            <RandomUsers userData={userData} loadingUsers={loadingUsers} findMatch={findMatch} />
          </Box>
          <Box>
            <Matches matchData={matchData} loadingMatches={loadingMatches} userName={userName} userLocation={userLocation} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default App;
