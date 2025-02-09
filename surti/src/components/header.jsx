import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/surti-tranparent.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Tours', path: '/tours' },
  { name: 'Transport Services', path: '/transport-services' },
  { name: 'Hajj & Ummrah', path: '/hajj-umrah' },
  { name: 'Contact', path: '/contact' },
];

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 0.7,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    }
  },
  closed: {
    x: '-100%',
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    }
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.15
    }
  }
};

const overlayVariants = {
  open: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] }
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const stickyStyles = {
    position: 'sticky',
    top: '0',
    zIndex: '50',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav style={stickyStyles} className="flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/" className="flex items-center py-2">
          <img src={Logo} alt="Logo" className="h-14 sm:h-12 md:h-14 md:w-36" />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className="relative text-gray-800 hover:text-blue-600 px-3 py-2 transition-colors duration-300"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.div>
        )}
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0"
              onClick={toggleMobileMenu}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 w-full h-screen bg-white backdrop-blur-sm bg-opacity-60 shadow-xl z-50 "
            >
              <div className="flex flex-col justify-center items-center p-6 space-y-5 mt-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      to={item.path}
                      className="text-xl text-gray-800 hover:text-blue-600 font-medium"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
