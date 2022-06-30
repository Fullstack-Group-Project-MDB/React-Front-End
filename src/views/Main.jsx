import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListingForm from '../components/ListingForm';
import { addListing, getAllListings } from '../services/listings';

function Main() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listings = await getAllListings();
      setListings(listings);
    };
    getData();
  }, []);

  const listingSetter = (listing) => {
    setListings((prev) => [...prev, listing]);
  };

  return (
    <>
      <ListingForm
        setter={listingSetter}
        initialState={{ title: '', content: '' }}
        crudFunction={addListing}
      />
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
