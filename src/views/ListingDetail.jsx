import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ListingForm from '../components/ListingForm';
import { getListingById, updateById } from '../services/listings';

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getListingById(id)
      .then((item) => setListing(item))
      .then(() => setLoading(false))
      .catch((e) => console.error(e));
  }, [id]);

  const updateFunction = async (formState) => {
    setLoading(true);
    const updatedListing = await updateById(id, formState);
    setLoading(false);
    return updatedListing;
  };
  const updateListing = async (data) => {
    setListing(data);
    setIsEditing(false);
  };
  if (loading) return <div>loading...</div>;

  return (
    <div>
      {!isEditing && <p onClick={() => setIsEditing(true)}>✏️</p>}
      <p>🗑️</p>
      {isEditing ? (
        <div>
          <ListingForm
            setter={updateListing}
            initialState={listing}
            crudFunction={updateFunction}
          />
        </div>
      ) : (
        <>
          <h1>{listing.title}</h1>
          <p>{listing.content}</p>
        </>
      )}
    </div>
  );
}

export default ListingDetail;
