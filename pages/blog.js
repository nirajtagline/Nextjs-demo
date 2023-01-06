import Image from "next/image";
import React from "react";

const Blog = ({ data }) => {
  return data?.map(({ id, author, download_url }) => {
    return (
      <ul key={id}>
        <Image src={download_url} alt={id} width={200} height={200} />
        <li>{author}</li>
      </ul>
    );
  });
};
Blog.private = true;
Blog.role = "admin";
export default Blog;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://picsum.photos/v2/list`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
