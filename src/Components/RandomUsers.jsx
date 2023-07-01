import React, { useEffect } from 'react';

import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    Chip,
    CircularProgress,
    CardActions,
    Button
} from '@mui/material';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const RandomUsers = ({ userData, loading }) => {

    return (
        <Box sx={{ bgcolor: "#dee2e6", padding: "2rem" }}>
            <Typography mb={3} variant='h5'>Random Users</Typography>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )}
            {userData && userData.length > 0 ? (
                <Box sx={{ height: "375px", overflowY: "auto" }}>
                    {userData.map((user) => (
                        <Card sx={{ mb: 3 }} key={user.id.value}>
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
                                <Typography variant="subtitle1">Gender: {user.gender}</Typography>
                                <Typography variant="subtitle1">Location: {user.location.city}, {user.location.country}</Typography>
                            </CardContent>
                            <CardActions sx={{ borderTop: "1px solid #dee2e6" }}>
                                <Button variant='contained' color="secondary" size="small">Find Match</Button>
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
