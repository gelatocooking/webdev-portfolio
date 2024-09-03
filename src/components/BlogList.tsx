import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './module-css/BlogList.module.css'; // Importowanie modułu CSS

// Definiowanie interfejsu dla postów
interface Post {
  id: number;
  attributes: {
    Title: string;
    Rating: number;
    createdAt: string;
    slug?: string; // Optional, depending on your data structure
  };
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/reviews');
        setPosts(response.data.data); // Zakładając, że dane są opakowane w "data"
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.blogList}>
      {posts.map(post => (
        <div key={post.id} className={styles.blogCard}>
          <h2>{post.attributes.Title}</h2>
          <p>Rating: {post.attributes.Rating}</p>
          <p>Dodany: {new Date(post.attributes.createdAt).toLocaleDateString()}</p>
          {post.attributes.slug && (
            <Link to={`/post/${post.attributes.slug}`}>Read More</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
