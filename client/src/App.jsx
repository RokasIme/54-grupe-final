import { BrowserRouter, Route, Routes } from "react-router";
import { PublicLayout } from "./layout/PublicLayout";
import { PageHome } from "./pages/PageHome";
import { PageMovies } from "./pages/PageMovies";
import { PageCategories } from "./pages/PageCategories";
import { PageLogin } from "./pages/PageLogin";
import { PageRegister } from "./pages/PageRegister";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
          <Route index path="/" element={<PageHome />} />
          <Route path="/movies" element={<PageMovies />} />
          <Route path="/categories" element={<PageCategories />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/login" element={<PageLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
