/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./posts.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [currPage, setCurrPage] = useState(1);

  const nums = [...Array(11).keys()].slice(1);

  const changeCurrentPage = (n) => {
    setCurrPage(n);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currPage}&_limit=10`
      );
      const data = await response.json();
      setPosts([...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  return (
    <>
      <div className="postContainer">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h2>User ID: {post.userId}</h2>
            <p>ID: {post.id}</p>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <ul>
          <MdOutlineKeyboardDoubleArrowLeft
            onClick={() => setCurrPage(1)}
            className="arrows"
          />

          <IoIosArrowBack
            onClick={() => setCurrPage((prev) => (prev > 0 ? prev - 1 : prev))}
            className="arrows"
          />

          {nums.map((n, i) => (
            <li
              key={i}
              onClick={() => changeCurrentPage(n)}
              className={`${currPage == n ? "active" : ""}`}
            >
              {n}
            </li>
          ))}

          <IoIosArrowForward
            onClick={() => setCurrPage((prev) => (prev < 10 ? prev + 1 : prev))}
            className="arrows"
          />

          <MdOutlineKeyboardDoubleArrowRight
            onClick={() => setCurrPage(10)}
            className="arrows"
          />
        </ul>
      </div>
    </>
  );
};

export default Posts;
