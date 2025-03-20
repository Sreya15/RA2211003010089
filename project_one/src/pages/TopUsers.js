import React, { useEffect, useState } from "react";
import { fetchUsers, fetchPosts } from "../api";

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const users = await fetchUsers();
      const posts = await fetchPosts();

      const userPostCount = users.map(user => ({
        ...user,
        postCount: posts.filter(post => post.userId === user.id).length,
      }));

      const sortedUsers = userPostCount.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
      setTopUsers(sortedUsers);
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-3">Top Users</h2>
      {loading ? (
        <div className="text-center">⏳ Loading...</div>
      ) : (
        <ul>
          {topUsers.map(user => (
            <li key={user.id} className="border p-3 my-2 rounded-md shadow-sm bg-gray-50">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500">{user.postCount} Posts</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopUsers;

