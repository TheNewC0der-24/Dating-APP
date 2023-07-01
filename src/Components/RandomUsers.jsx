import React from 'react';

import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    CircularProgress,
    CardActions,
    Button
} from '@mui/material';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

import { capitalizeFirstLetter } from '../Utilities/Capitalize';

const RandomUsers = ({ userData, loadingUsers, findMatch }) => {

    return (
        <Box sx={{ bgcolor: "#dee2e6", padding: "2rem" }}>
            <Typography mb={3} variant='h5'>Users</Typography>

            {loadingUsers && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )}
            {userData && userData.length > 0 ? (
                <Box sx={{ height: "530px", overflowY: "auto" }}>
                    {userData.map((user) => (
                        <Card sx={{ mb: 3 }} key={user.name.first}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#000" }}>
                                        {user.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
                                    </Avatar>
                                }
                                title={user.name.first + " " + user.name.last}
                                subheader={user.email}
                            />
                            <CardMedia
                                component="img"
                                image={user.picture.large}
                                alt={user.name.first}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Age: {user.dob.age}</Typography>
                                <Typography variant="subtitle1">Gender: {capitalizeFirstLetter(user.gender)}</Typography>
                                <Typography variant="subtitle1">Location: {user.location.city}, {user.location.country}</Typography>
                            </CardContent>
                            <CardActions sx={{ borderTop: "1px solid #dee2e6" }}>
                                <Button variant='contained' color="secondary" size="small" onClick={() => findMatch(user.gender, user.name, user.location.coordinates)}>Find Match</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography variant='body1'>No user data available</Typography>
            )}
        </Box>
    )
}

export default RandomUsers;
