import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './pages/Start';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";


function AppRoutes() {
  return (
  <BrowserRouter>
    <Menu />

    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<Start />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Route>

      <Route path="*" element={<div>Page not found</div>} />
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}

export default AppRoutes;
