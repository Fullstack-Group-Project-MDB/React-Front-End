import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getListingById } from '../services/listings';

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
  if (loading) return <div>loading...</div>;

  return (
    <div>
      {!isEditing && <p onClick={() => setIsEditing(true)}>✏️</p>}
      <p>🗑️</p>
      {isEditing ? (
        <div>
          <button onClick={() => setIsEditing(false)}>Save</button>
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
