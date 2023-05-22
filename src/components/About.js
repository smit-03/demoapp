import React, { useState } from 'react'
import { Button } from '@mui/material';


function About() {
    let req = 21312;
    const [requests, setRequests] = useState(req);
    const incrementReq = () => {
        setRequests(requests + 1);
    }
    const decrementReq = () => {
        setRequests(requests - 1);
    }
    return (
        <>
            <h1>Current Requests : {requests}</h1>
            <Button
                onClick={incrementReq}
                variant="contained"
                color="primary"
                style={{ margin: '1rem' }}>
                Make Request
            </Button>
            <Button
                onClick={decrementReq}
                variant="contained"
                color="primary"
                style={{ margin: '1rem' }}>
                Abort Request
            </Button>
        </>
    )
}

export default About