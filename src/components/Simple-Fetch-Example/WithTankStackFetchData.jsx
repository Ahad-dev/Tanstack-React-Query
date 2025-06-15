import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const WithTankStackFetchData = () => {

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }

    const {data,error,isLoading ,status} = useQuery({
        queryKey:['posts'],
        queryFn: fetchData,
    })
    console.log(status)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data found</div>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WithTankStackFetchData