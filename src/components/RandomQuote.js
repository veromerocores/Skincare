import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState('');
  const [searchedQuote, setSearchedQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://zenquotes.io/api/random');
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setQuote(data[0]);
      } else {
        console.error('Empty or invalid response from the API');
      }
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };
    
  

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
