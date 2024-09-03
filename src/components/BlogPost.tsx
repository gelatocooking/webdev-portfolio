import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Definiowanie interfejsu dla pełnego postu
interface Post {
  title: string;
  content: string;
}

const BlogPost: React.FC = () => {
  // Typowanie useParams bez przekazywania typu generycznego
  const { slug } = useParams<{ slug: string }>(); // Użycie literału typu string
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/posts?slug=${slug}`);
        setPost(response.data[0]);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
