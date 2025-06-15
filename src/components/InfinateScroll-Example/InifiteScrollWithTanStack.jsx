// InfiniteUsers.jsx
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const fetchUsers = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`);
  return data;
};

const InfiniteUsers = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['infinite-users'],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) =>
        lastPage.length ? allPages.length + 1 : undefined,
  });

  const { ref } = useInView({
    onChange: (inView) => {
        console.log("In view:", inView);
        console.log("Has next page:", hasNextPage);
      if (inView && hasNextPage) fetchNextPage();
    }
  });

  return (
    <div>
      {data?.pages.map((page, i) => (
        <ul key={i}>
          {page.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      ))}
      <div ref={ref}>{isFetchingNextPage ? 'Loading more...' : 'Scroll down...'}</div>
    </div>
  );
};

export default InfiniteUsers;
