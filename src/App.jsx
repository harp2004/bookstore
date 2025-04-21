// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Books from "./pages/Books";
// // import Cart from "./pages/Cart";
// // import Contact from "./pages/Contact";
// // import About from "./pages/About";
// // import Footer from "./components/Footer";
// // import Login from "./pages/Login"; // Import Login Page

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         {/* 🔹 Navbar (Always Visible) */}
// //         <Navbar />

// //         {/* 🔹 Page Content */}
// //         <div className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/books" element={<Books />} />
// //             <Route path="/cart" element={<Cart />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route path="/login" element={<Login />} /> {/* Added Login Route */}
// //           </Routes>
// //         </div>

// //         {/* 🔹 Footer (Always Visible) */}
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Books from "./pages/Books";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Footer from "./components/Footer";

// const App = () => {
//   const [cart, setCart] = useState([]);

//   // Function to Add Book to Cart
//   const addToCart = (book) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === book.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...book, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <Router>
//       <Navbar cartCount={cart.length} />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/books" element={<Books addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add book to cart
  const addToCart = (book) => {
    const exists = cart.find(item => item.id === book.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/books" element={<Books addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
