import axios from 'axios';

const API_URL = 'http://rest-api.localhost/api/posts';

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    return null;
  }
};


