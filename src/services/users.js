export const signUp = async ({ email, password }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid username or password');

  return resp.json();
}

export const signIn = async ({ email, password }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid username or password');

  return resp.json();
}

export const getUser = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    return resp.json();
  } catch (e) {
    console.log(e.message);
    return null;
  }
}