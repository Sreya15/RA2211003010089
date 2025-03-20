import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const latestPosts = await fetchPosts();
      setPosts(latestPosts.slice(-10).reverse()); // Show latest 10 posts
    }

    loadData();
    const interval = setInterval(loadData, 5000); // Refresh every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Live Feed</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="border p-2 my-2">
            <p className="font-semibold">{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
