import React, { useState, useEffect } from 'react';
import "./Country.css"
function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });
  }, []);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container">
      <h1>Mamlakatlar ro'yxati</h1>
      <input
        type="text"
        placeholder="Mamlakat qidirish..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((country, index) => (
            <li key={index}>
              <p>{country.name.common}</p>
              {country.flags && country.flags.svg && (
                <img src={country.flags.svg} alt={`${country.name.common} flag`} width="50" />
              )}
            </li>
          ))
        ) : (
          <p>Natija topilmadi yoki xato malumot kiritildi</p>
        )}
      </ul>
    </div>
  );
}

export default App;
