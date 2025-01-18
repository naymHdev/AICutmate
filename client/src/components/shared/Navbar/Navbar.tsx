import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-900">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <div className="text-xl font-bold">AdvancedBrand</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/buyCredit" className="hover:text-blue-500">
            Buy Credit
          </a>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
        </div>

        <div>
          <Button>Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
