import axios from "axios"
import React from "react"

const WithOutTankStackFetchData = () => {

    const [data,setData] = React.useState(null)
    const [error,setError] = React.useState(null)
    const [isLoading,setIsLoading] = React.useState(true)

    const fetchData = async () => {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }


    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true)
                const posts = await fetchData()
                setData(posts)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPosts()
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error?.message || "Something went wrong"}</div>
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

export default WithOutTankStackFetchData