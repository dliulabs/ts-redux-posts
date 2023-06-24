import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
        <ul id="horizontal-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="addpost">Add Post</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
