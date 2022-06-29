import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { addListing } from '../services/listings';

function ListingForm({setListings}) {
  const { formState, clearForm, handleChange } = useForm({ title: '', content: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      setErrorMessage('');
      const newListing = await addListing(formState);
      setListings((prev) => ([ ...prev, newListing ]))
      clearForm();
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <p>{errorMessage}</p>
      <label htmlFor="Title-Input">
        <input
          placeholder="Title"
          id="Title-Input"
          name="title"
          type="text"
          value={formState.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Content-Input">
        <input
          placeholder="Content"
          id="Content-Input"
          name="content"
          type="text"
          value={formState.content}
          onChange={handleChange}
        />
      </label>
      <button type="submit">send</button>
    </form>
  );
}

export default ListingForm;
