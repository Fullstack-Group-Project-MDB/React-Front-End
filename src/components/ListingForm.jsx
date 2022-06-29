import React from 'react';
import { useForm } from '../hooks/useForm';

function ListingForm() {
  const { formState, handleChange } = useForm({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
