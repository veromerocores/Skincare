import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://zenquotes.io/api/random';
        const response = await fetch(proxyUrl + apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        if (data.length > 0 && data[0].q && data[0].a) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        } else {
          throw new Error('No quote found');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      {quote && author && (
        <blockquote>
          <p>{quote}</p>
          <p>- {author}</p>
        </blockquote>
      )}
    </div>
  );
};

export default RandomQuote;
