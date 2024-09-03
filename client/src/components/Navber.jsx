import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navber = () => {
  return (
    <>
      <header className="bg-black text-white">
        <nav className="flex items-center justify-around px-12 h-16">
          <div>
            <Link to={"/"} className="text-2xl font-bold ">
              [Logo]
            </Link>
          </div>
          <div className="flex flex-col items-center absolute left-0 top-16 bg-black gap-6 py-2 ">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"book"}>Books</Link>
              </li>
            </ul>
            <div>
              <button>Signup</button>
              <button>Login</button>
            </div>
          </div>
          <div>
            <FaBars />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navber;
