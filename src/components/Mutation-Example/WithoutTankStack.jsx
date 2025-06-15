// AddUser.jsx (without TanStack)
import axios from 'axios';
import { useState } from 'react';

const AddUser = ({ onUserAdded }) => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [userId,setUserId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', { title,body,userId });
        onUserAdded(); // refetch manually
        } catch (err) {
        setError('Failed to add user');
        } finally {
        setLoading(false);
        }
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        value={userId}
        type='number'
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter UserId"
      />
      <input
        value={title}
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <input
        value={body}
        type='text'
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter Body"
      />
      <button type="submit">Add Post</button> 
    </form>
    {error && <p>{error}</p>}
    {loading && <p>Adding Post...</p>}
    </>

  );
};

export default AddUser;
