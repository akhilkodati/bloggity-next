import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200 py-6 mb-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
            TechBlog
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;