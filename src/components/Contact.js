import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Contact = () => {

    const handleSubmit = (e) => {
        alert("Form submitted!!");
    }

    return (
        <div>
            <Box maxWidth={400} mx="auto" p={8} sx={{
                marginTop: '2rem',
                border: '3px solid grey',
                borderRadius: '10px',
            }}>
                <Typography variant="h4" align="center" style={{ marginBottom: '1rem' }}>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        required
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        required
                        style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        style={{ marginBottom: '1rem' }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Contact;
