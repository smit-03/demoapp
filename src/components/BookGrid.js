import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import b1 from '../book1.jpg';
import b2 from '../book2.jpg';
import './BookGrid.css';

const BookGrid = () => {
    const books = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: '$9.99',
            image: b1,
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            price: '$14.99',
            image: b2,
        },
    ];

    return (
        <Box sx={{
            margin: '50px',
            p: '5'
        }}>
            <Grid container spacing={2} className="book-grid">
                {books.map((book) => (
                    <Grid item xs={6} sm={4} md={3} key={book.id}>
                        <Paper elevation={3} className="book-card">
                            <img src={book.image} alt={book.title} className="book-image" />
                            <Typography variant="h6">{book.title}</Typography>
                            <Typography variant="subtitle1">{book.author}</Typography>
                            <Typography variant="subtitle1">{book.price}</Typography>
                            <Button variant="contained" color="primary">
                                Add to Cart
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookGrid;
