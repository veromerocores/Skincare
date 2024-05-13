import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState('');
  const [searchedQuote, setSearchedQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setQuote(data[0]);
      }
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  const fetchSearchedQuote = async () => {
    try {
      const apiKey = 'X-Api-Key'; // Replace 'your-api-key' with your actual API key
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${encodeURIComponent(category)}`, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setSearchedQuote(data[0]);
      } else {
        setSearchedQuote(null);
        console.log('No quotes found for the category:', category);
      }
    } catch (error) {
      console.error('Error fetching searched quote:', error);
    }
  };
  

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearchedQuote();
  };

  return (
    <div className="speech-bubble">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchedQuote ? (
          <div>
            <p className="quote-text">{searchedQuote.q}</p>
            <p className="quote-author">- {searchedQuote.a}</p>
          </div>
        ) : (
          quote && (
            <div>
              <p className="quote-text">{quote.q}</p>
              <p className="quote-author">- {quote.a}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RandomQuote;
