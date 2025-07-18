export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return response.json();
}; 