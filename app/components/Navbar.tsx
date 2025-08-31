import { useState } from "react";
import { FaBars, FaLaptopCode, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";
  const linkIsActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? active : base;

  //   const mainNav = [
  //     {
  //       id: 1,
  //       to: "/",
  //       text: "Home",
  //     },
  //     {
  //       id: 2,
  //       to: "/projects",
  //       text: "Projects",
  //     },
  //     {
  //       id: 3,
  //       to: "/blog",
  //       text: "Blog",
  //     },
  //     {
  //       id: 4,
  //       to: "/about",
  //       text: "About",
  //     },
  //     {
  //       id: 5,
  //       to: "/contact",
  //       text: "Contact",
  //     },
  //   ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>The Friendly Developer</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            {/* {mainNav.map(
              ({ id, to, text }: { id: number; to: string; text: string }) => (
                <NavLink key={id} className={linkIsActive} to={to}>
                  {text}
                </NavLink>
              )
            )} */}
            <NavLink className={linkIsActive} to="/">
              Home
            </NavLink>
            <NavLink className={linkIsActive} to="/projects">
              Projects
            </NavLink>
            <NavLink className={linkIsActive} to="/blog">
              Blog
            </NavLink>
            <NavLink className={linkIsActive} to="/about">
              About
            </NavLink>
            <NavLink className={linkIsActive} to="/contact">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center text-white">
          <NavLink
            className={linkIsActive}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={linkIsActive}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            className={linkIsActive}
            to="/blog"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            className={linkIsActive}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={linkIsActive}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
