import Link from "next/link";
import React from "react";
import styles from "../../styles/Post.module.css";

const Post = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <Link
            href={`post/${post.id}`}
            key={post.id}
            className={styles.postParent}
          >
            <li>{post.title}</li>
            <li>{post.body}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Post;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the post component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
