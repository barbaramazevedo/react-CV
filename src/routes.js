import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import PageNotFound from "pages/PageNotFound";
import ScrollToTop from "components/ScrollToTop";


function AppRoutes() {
  return (
  <BrowserRouter>
    <ScrollToTop />
    <Menu />

    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}

export default AppRoutes;
