import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';
import { TextField, List, ListItem, ListItemText, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import productDatabase from '../productDatabase.json';

const TITLE = 'Search';

export default function Search() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [filteredResults, setFilteredResults] = useState(productDatabase); // Initialize with all products

  // Filter results based on query and type
  const filterResults = () => {
    if (!Array.isArray(productDatabase)) {
      console.error('Expected productDatabase to be an array but got:', productDatabase);
      return;
    }

    const results = productDatabase.filter((item) =>
      (item.product.toLowerCase().includes(query.toLowerCase()) ||
      item.ingredient.toLowerCase().includes(query.toLowerCase())) &&
      (type ? item.type === type : true)
    );
    setFilteredResults(results);
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle type selection change
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    filterResults();
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
                onChange={handleSearchChange}
                sx={{ ml: 1 }}
              />
              <FormControl sx={{ ml: 2, minWidth: 120 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={type}
                  onChange={handleTypeChange}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Exfoliant">Exfoliant</MenuItem>
                  <MenuItem value="Cleanser">Cleanser</MenuItem>
                  <MenuItem value="Toner">Toner</MenuItem>
                  <MenuItem value="Serum">Serum</MenuItem>
                  <MenuItem value="Moisturizer">Moisturizer</MenuItem>
                  <MenuItem value="Sunscreen">Sunscreen</MenuItem>
                  <MenuItem value="Mask">Mask</MenuItem>
                </Select>
              </FormControl>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ ml: 2 }} 
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </Box>
            <List>
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.product} secondary={item.ingredient} />
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
