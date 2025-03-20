import React, { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "../api";

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const posts = await fetchPosts();
      const comments = await fetchComments();

      const postCommentCount = posts.map(post => ({
        ...post,
        commentCount: comments.filter(comment => comment.postId === post.id).length,
      }));

      const sortedPosts = postCommentCount.sort((a, b) => b.commentCount - a.commentCount).slice(0, 5);
      setTrendingPosts(sortedPosts);
    }

    loadData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Trending Posts</h2>
      <ul>
        {trendingPosts.map(post => (
          <li key={post.id} className="border p-2 my-2">
            <p className="font-semibold">{post.title}</p>
            <p>{post.body}</p>
            <p className="text-gray-500">Comments: {post.commentCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPosts;
