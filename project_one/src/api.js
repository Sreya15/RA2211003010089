const API_URL = "http://localhost:3000"; 

let cachedUsers = null;
let cachedPosts = null;
let cachedComments = null;

export async function fetchUsers() {
  if (!cachedUsers) {
    const response = await fetch(`${API_URL}/users`);
    cachedUsers = await response.json();
  }
  return cachedUsers;
}

export async function fetchPosts() {
  if (!cachedPosts) {
    const response = await fetch(`${API_URL}/posts`);
    cachedPosts = await response.json();
  }
  return cachedPosts;
}

export async function fetchComments() {
  if (!cachedComments) {
    const response = await fetch(`${API_URL}/comments`);
    cachedComments = await response.json();
  }
  return cachedComments;
}
