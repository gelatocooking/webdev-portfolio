import React from 'react';
import BlogList from '../BlogList';
import styles from '../module-css/BlogList.module.css'
// import Hero from '../Hero'
const Blog: React.FC = () => {
  return (
    <section className={styles.blogContainer}>
      <h1>Blog</h1>
      <p>W trakcie budowy..</p>
      <BlogList />
    </section>
        
    
  );
};

export default Blog;
