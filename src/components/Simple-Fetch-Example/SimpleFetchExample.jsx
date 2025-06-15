import WithTankStackFetchData from './WithTankStackFetchData'
import WithOutTankStackFetchData from './WithOutTankStackFetchData'

const SimpleFetchExample = () => {
  return (
    <>
      <p>
        This example demonstrates how to use React Query with and without the Tank Stack for data fetching.
        The first component uses React Query to manage the data fetching and caching, while the second component
        uses a more traditional approach with React's useState and useEffect hooks.
      </p>
      <p>
        The Tank Stack is a modern stack that includes React, React Query, and other tools to enhance the development experience.
        It simplifies data fetching and state management, making it easier to build robust applications.
      </p>
      <h1>React Query with Tank Stack</h1>
      <WithTankStackFetchData />
      {/* <WithOutTankStackFetchData /> */}
    </>
  )
}

export default SimpleFetchExample