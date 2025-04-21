// // import React from "react";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ShoppingCart } from "lucide-react"; // For cart icon

// // const Navbar = ({ cartCount }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-blue-600 text-white p-4 shadow-md">
// //       <div className="container mx-auto flex justify-between items-center">
        
// //         {/* Logo */}
// //         <Link to="/" className="text-2xl font-bold">
// //           Bookstore 📚
// //         </Link>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex space-x-6">
// //           <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
// //           <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
// //           <li><Link to="/books" className="hover:text-gray-200">Books</Link></li>
// //           <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
// //           <li className="relative">
// //             <Link to="/cart">
// //               <ShoppingCart size={24} />
// //               {cartCount > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>
// //           </li>
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
// //           ☰
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <ul className="md:hidden bg-blue-700 text-center space-y-4 py-4">
// //           <li><Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link></li>
// //           <li><Link to="/books" className="block" onClick={() => setIsOpen(false)}>Books</Link></li>
// //           <li><Link to="/contact" className="block" onClick={() => setIsOpen(false)}>Contact</Link></li>
// //           <li className="relative">
// //             <Link to="/cart" className="block" onClick={() => setIsOpen(false)}>
// //               Cart <ShoppingCart size={20} />
// //               {cartCount > 0 && (
// //                 <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>
// //           </li>
// //         </ul>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ShoppingCart, ChevronDown } from "lucide-react"; // Cart & Dropdown Icon

// // const Navbar = ({ cartCount }) => {
// //   return (
// //     <nav className="bg-blue-600 text-white p-4  sticky top-0 z-50 shadow-md">
// //       <div className="container mx-auto flex justify-between items-center">
        
// //         {/* 🔹 Logo */}
// //         <Link to="/" className="text-2xl font-bold">
// //           Bookstore 📚
// //         </Link>

// //         {/* 🔹 Desktop Menu */}
// //         <ul className="hidden md:flex space-x-6 items-center">
// //           <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
// //           <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
          
// //           {/* Books Dropdown on Hover */}
// //           <li className="relative group">
// //             <Link to="/books" className="flex items-center hover:text-gray-300">
// //               Books <ChevronDown className="ml-1" size={18} />
// //             </Link>

// //             {/* Dropdown Menu (Only visible on hover) */}
// //             <ul className="absolute left-0 mt-2 z-10 w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
// //               <li><Link to="/books/fiction" className="block px-4 py-2 hover:bg-gray-200">Fiction</Link></li>
// //               <li><Link to="/books/non-fiction" className="block px-4 py-2 hover:bg-gray-200">Non-Fiction</Link></li>
// //               <li><Link to="/books/comics" className="block px-4 py-2 hover:bg-gray-200">Comics</Link></li>
// //               <li><Link to="/books/bestsellers" className="block px-4 py-2 hover:bg-gray-200">Bestsellers</Link></li>
// //             </ul>
// //           </li>

// //           <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
// //           <li><Link to="/login" className="hover:text-gray-300 transition">Login</Link></li>

// //           {/* Cart */}
// //           <li className="relative">
// //             <Link to="/cart">
// //               <ShoppingCart size={24} />
// //               {cartCount > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react"; // Import icons

// const Navbar = ({ cartCount }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* 🔹 Logo */}
//         <Link to="/" className="text-2xl font-bold">
//           Bookstore 📚
//         </Link>

//         {/* 🔹 Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* 🔹 Menu (Responsive) */}
//         <ul
//           className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <li><Link to="/" className="block hover:text-gray-300">Home</Link></li>
//           <li><Link to="/about" className="block hover:text-gray-300">About</Link></li>

//           {/* 🔹 Books Dropdown */}
//           <li className="relative group">
//             <Link to="/books" className="flex items-center hover:text-gray-300">
//               Books <ChevronDown className="ml-1" size={18} />
//             </Link>

//           </li>

//           <li><Link to="/contact" className="block hover:text-gray-300">Contact</Link></li>
//           <li><Link to="/login" className="block hover:text-gray-300">Login</Link></li>

//           {/* 🔹 Cart */}
//           <li className="relative">
//             <Link to="/cart">
//               <ShoppingCart size={24} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react"; // Import icons

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* 🔹 Logo */}
        <Link to="/" className="text-2xl font-bold">
          Bookstore 📚
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔹 Menu (Responsive) */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li><Link to="/" className="block hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="block hover:text-gray-300">About</Link></li>
          <li><Link to="/books" className="block hover:text-gray-300">Books</Link></li>
          <li><Link to="/contact" className="block hover:text-gray-300">Contact</Link></li>
          <li><Link to="/login" className="block hover:text-gray-300">Login</Link></li>

          {/* 🔹 Cart */}
          <li className="relative">
            <Link to="/cart">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
