import React, { useState, useEffect } from 'react';

const YogaComponent = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []); // Fetch all categories when component mounts

  const fetchCategories = () => {
    fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setFilteredCategories(data); // Initialize filteredCategories with all categories
      })
      .catch(error => console.error('Error fetching categories:', error));
  };

  const handleSearch = () => {
    let filtered = categories;

    // Filter categories based on searchName
    if (searchName) {
      filtered = filtered.filter(category =>
        category.category_name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCategories(filtered);
  };

  return (
    <div>
      <h2 className='yoga-category'>Yoga Poses</h2>
      <div className='yoga-category'>
        <input
          type="text"
          placeholder="Search by category..."
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="yoga-results-container">
        {filteredCategories.map(category => (
          <div key={category.id} className="yoga-category-item">
            <h3>{category.category_name}</h3>
            <p>{category.category_description}</p>
            <div className="yoga-poses">
              {category.poses.map(pose => (
                <div key={pose.id} className="yoga-pose">
                  <h4>{pose.english_name}</h4>
                  <p>{pose.pose_description}</p>
                  <img src={pose.url_png} alt={pose.english_name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaComponent;

/* https://github.com/alexcumplido/yoga-api */