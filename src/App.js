// import React from "react";
// import Header from "./shared/header/Header";
// import Footer from "./shared/footer/Footer";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import Home from "../../pages/HomePage";
// import About from "../../pages/AboutPage";
// import Contact from "../../pages/ContactPage";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import PostsList from "./features/posts/PostsList";
// import PostDetails from './features/posts/PostDetails';
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// const App = () => {
//   return (

//     <Router>
//       <Routes>
//         <div className="mainContainer">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//         <Route path="*" element={<Layout />}> {/* تغيير الأب ليكون path="*" */}
//           <Route index element={<PostsList />} /> {/* الصفحة الرئيسية لعرض البوستات */}
//           <Route path="posts/:id" element={<PostDetails />} /> {/* صفحة التفاصيل */}
//           <Route path="*" element={<h2>404 - Page Not Found</h2>} /> {/* في حالة الصفحة غير موجودة */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

















import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import PostsList from "./features/posts/PostsList";
import PostDetails from './features/posts/PostDetails';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;