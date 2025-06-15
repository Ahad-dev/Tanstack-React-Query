// PaginatedUsers.jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchUsers = async (page) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`);
  return data;
};

const PaginatedUsers = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
      <p>Page: {page}</p>
    </div>
  );
};

export default PaginatedUsers;
