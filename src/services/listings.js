import { getByTitle } from '@testing-library/react';

export const getAllListings = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/listings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  });
  if (!resp.ok) throw new Error('there was a problem ');

  return resp.json();
};

export const getListingById = async (id) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/listings/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
  });
  if (!resp.ok) throw new Error('there was a problem ');

  return resp.json();
};
export const updateById = async (id, attrs) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/listings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(attrs),
  });
  if (!resp.ok) throw new Error('there was a problem ');

  return resp.json();
};

export const addListing = async (listing) => {
  const { title, content } = listing;
  if (!title || !content) throw new Error('please fill out all fields');

  const resp = await fetch(`${process.env.API_URL}/api/v1/listings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(listing),
  });

  if (!resp.ok) throw new Error('there was a problem adding your listing');

  return resp.json();
};

export const deleteById = async (id) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/listings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json',
    },
    credentials: 'include',
    mode: 'cors',
  });
  if (!resp.ok) throw new Error('there was a problem deleting your listing, ya dummy');
  return resp.json();
}
