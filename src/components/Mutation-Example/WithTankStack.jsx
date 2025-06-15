import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'

const WithTankStack = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [userId,setUserId] = useState(1);
    const queryClient = useQueryClient()

    
    
    const AddUser = async (post) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",post)
        console.log(response.data)
        return response.data
    }

    const mutate = useMutation({
    mutationFn: AddUser,
    onSuccess: (data) => {
        // Optimistically update local cache
        queryClient.setQueryData(['posts'], (oldPosts = []) => [...oldPosts, data]);
    }
    });


    const handleSubmit = (e)=>{
        console.log("j")
        e.preventDefault()
        mutate.mutate({title,body,userId});
    }

  return (
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
      {mutate.isPending && <p>Adding user...</p>}
      {mutate.isSuccess && <p>Post added successfully!</p>}
      {mutate.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  )
}

export default WithTankStack