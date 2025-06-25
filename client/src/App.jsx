import { BrowserRouter, Route, Routes } from "react-router";
import { PublicLayout } from "./layout/PublicLayout";
import { PageHome } from "./pages/PageHome";
import { PageMovies } from "./pages/PageMovies";
import { PageCategories } from "./pages/PageCategories";
import { PageLogin } from "./pages/PageLogin";
import { PageRegister } from "./pages/PageRegister";
import { PageMovieInner } from "./pages/PageMovieInner";
import { PageCategoryInner } from "./pages/PageCategoryInner";
import { PageDashboard } from "./pages/PageDashboard";
import { PrivateLayout } from "./layout/PrivateLayout";
import { PageNotFound } from "./pages/PageNotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
          <Route index path="/" element={<PageHome />} />
          <Route path="/movies" element={<PageMovies />} />
          <Route path="/movies/:movie" element={<PageMovieInner />} />
          <Route path="/categories" element={<PageCategories />} />
          <Route path="/categories/:category" element={<PageCategoryInner />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/login" element={<PageLogin />} />
        </Route>
        <Route Component={PrivateLayout}>
          <Route path="/dashboard" element={<PageDashboard />} />
        </Route>
        <Route Component={PublicLayout}>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
