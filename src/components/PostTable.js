import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';
import PostRow from './PostRow';

const PostTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    console.log(data)
    setPosts(data);
  };

  const handleDelete = async (postId) => {
    await deletePost(postId);
    fetchPosts();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <PostRow key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
