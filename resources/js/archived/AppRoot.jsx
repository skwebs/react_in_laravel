
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MultipleInput from '../pages/MultipleInput';
import PageNotFound from '../pages/PageNotFound';

function AppRoot() {
  return (
    <div className="vh-100 d-flex flex-column">
      <BrowserRouter>
        {/* <Loading show={true} /> */}
        {/* <BrowserRouter basename="/laravel-react-app/"> */}
        <header>
          <Navigation />
        </header>
        <main className="mt-5 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/multipleInput" element={<ProtectedRoute protectedComp={MultipleInput} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer className="bg-dark">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default AppRoot;
