import React from 'react';

const API_KEY = '';
const BASE_URL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=`;

const Map = ({city, country}) => {
  if (city && country) {
    const mapSourceUrl = `${BASE_URL}${city}, ${country}`;
    return <iframe className="google-maps" src={mapSourceUrl} frameBorder="0" />;
  } else {
    return <p>Loading map...</p>;
  }
};

export default Map;
