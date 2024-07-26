import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import { TextField, List, ListItem, ListItemText, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Simulated search results for skincare ingredients
const searchData = [
  { id: 1, title: 'Hyaluronic Acid', description: 'Hydrates and plumps the skin.' },
  { id: 2, title: 'Vitamin C', description: 'Brightens and evens skin tone.' },
  { id: 3, title: 'Niacinamide', description: 'Reduces inflammation and improves skin elasticity.' },
  { id: 4, title: 'Retinol', description: 'Boosts collagen production and reduces wrinkles.' },
  { id: 5, title: 'Salicylic Acid', description: 'Exfoliates and helps with acne.' },
  { id: 6, title: 'Glycolic Acid', description: 'AHA that exfoliates the surface of the skin.' },
  // API would be used, this is an example
];

const TITLE = 'Search';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle search query change
  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter results based on query
    const filteredResults = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <main className='searchpage'>
        <Container maxWidth="sm">
          <Box sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SearchIcon />
              <TextField
                fullWidth
                variant="outlined"
                label="Search Skincare Ingredients"
                value={query}
                onChange={handleSearch}
                sx={{ ml: 1 }}
              />
            </Box>
            <List>
              {results.length > 0 ? (
                results.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.title} secondary={item.description} />
                  </ListItem>
                ))
              ) : (
                <Typography>No results found</Typography>
              )}
            </List>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
