export const getAllListings = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/listings`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  if (!resp.ok) throw new Error('there was a problem ');

  return resp.json();
};
