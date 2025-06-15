import InfiniteUsers from "./components/InfinateScroll-Example/InifiteScrollWithTanStack"
import { MutationWithTankStack } from "./components/Mutation-Example"
import {PaginatedUsers} from "./components/Pangination-Example"
import {SimpleFetchExample} from "./components/Simple-Fetch-Example"

const App = () => {

  return (
      <>
        {/* <SimpleFetchExample/> */}
        {/* <MutationWithTankStack/> */}
        {/* <PaginatedUsers/> */}
        <InfiniteUsers/>
      </>
  )
}

export default App