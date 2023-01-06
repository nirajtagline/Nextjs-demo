import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Post.module.css";
import { Watch } from "react-loader-spinner";

const Post = ({ posts }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  return (
    <ul>
      <div className={styles.postParent}>
        <li>{posts.title}</li>
        <li>{posts.body}</li>
      </div>
    </ul>
  );
};

export default Post;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id?.toString() },
  }));

  paths.pop(); // for check fallback
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } means other routes show loader during fetch data.
  // { fallback: "blocking" } means other routes show white screen during fetch data.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}
