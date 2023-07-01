import React from 'react';

import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    CircularProgress
} from '@mui/material';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

import { capitalizeFirstLetter } from '../Utilities/Capitalize';

const Matches = ({ matchData, loadingMatches, userName }) => {

    return (
        <Box sx={{ bgcolor: "#dee2e6", padding: "2rem" }}>
            <Typography mb={3} variant='h5'>Matches</Typography>
            {userName && <Typography mb={3} variant='subtitle1'>Showing matches for <span style={{ backgroundColor: "#000", color: "#fff", padding: "1rem" }}>{userName}</span></Typography>}
            {loadingMatches && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )}
            {matchData && matchData.length > 0 ? (
                <Box sx={{ height: "530px", overflowY: "auto" }}>
                    {matchData?.map((match) => (
                        <Card sx={{ mb: 3 }} key={match.name.first}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#000" }}>
                                        {match.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
                                    </Avatar>
                                }
                                title={match.name.first + " " + match.name.last}
                                subheader={match.email}
                            />
                            <CardMedia
                                component="img"
                                image={match.picture.large}
                                alt={match.name.first}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">Age: {match.dob.age}</Typography>
                                <Typography variant="subtitle1">Gender: {capitalizeFirstLetter(match.gender)}</Typography>
                                <Typography variant="subtitle1">Location: {match.location.city}, {match.location.country}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography variant='body1'>No match data available</Typography>
            )}
        </Box>
    )
}

export default Matches;
