import React from 'react';

const PostRow = ({ post, onDelete }) => {
  return (
    <tr>
      <td>{post.username}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default PostRow;
