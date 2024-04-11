import { useState, useEffect } from "react";
import styled from "styled-components";
import BlogsItem from "./BlogsItem";
import SectionHeader from "../UI/SectionHeader";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("./data/blogs.json");
      const data = await res.json();
      console.log("data", data);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    console.log(blogs);
  }, []);

  return (
    <>
      <SectionHeader heading="Blogs" />
      <StyledList>
        {blogs.map((blog) => {
          return (
            <BlogsItem
              key={blog.id}
              imagePath={blog.imagePath}
              alt={blog.description}
              description={blog.description}
            />
          );
        })}
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 90em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default BlogsList;
