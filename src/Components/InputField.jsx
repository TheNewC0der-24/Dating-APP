import React from 'react';

import {
    Box,
    TextField,
    Button
} from '@mui/material';

const InputField = ({ usersNum, setUsersNum, handleSearch }) => {
    return (
        <Box mt={5} sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <TextField
                type='number'
                sx={{ width: "20rem" }}
                size='small'
                value={usersNum}
                onChange={(e) => setUsersNum(e.target.value)}
                placeholder='Enter the desired number of users...'
            />
            <Button
                variant='contained'
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    )
}

export default InputField;
