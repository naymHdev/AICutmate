import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <div className="text-xl font-bold">AdvancedBrand</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <span>Products</span>
              {/* <ChevronDown className="w-4 h-4" /> */}
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg group-hover:block hidden">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-600"
              >
                Product 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-600"
              >
                Product 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-600"
              >
                Product 3
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-500">
            Features
          </a>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="hover:text-blue-500">
              Products
            </a>
            <a href="#" className="hover:text-blue-500">
              Features
            </a>
            <a href="#" className="hover:text-blue-500">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-500">
              Blog
            </a>
            <button
              onClick={toggleDarkMode}
              className="mt-4 flex items-center justify-center space-x-2 p-2 rounded bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
