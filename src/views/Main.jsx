import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListingForm from '../components/ListingForm';
import { getAllListings } from '../services/listings';

function Main() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listings = await getAllListings();
      setListings(listings);
    };
    getData();
  }, []);

  return (
    <>
      <ListingForm />
      {listings.map((listing) => (
        <ul key={listing.id}>
          <Link to={`/listings/${listing.id}`}>
            <li>{listing.title}</li>
          </Link>
        </ul>
      ))}
    </>
  );
}

export default Main;
