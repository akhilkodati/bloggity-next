import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border-t border-gray-200 py-8 mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About TechBlog</h3>
            <p className="text-gray-600">
              Exploring the latest in technology, design, and development.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600">© 2024 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;