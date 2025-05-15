import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './pages/Start';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "components/Footer";


function AppRoutes() {
  return (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default AppRoutes;
