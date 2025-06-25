import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { PageLogin } from "../pages/PageLogin";

export function PrivateLayout() {
  return (
    <>
      <Header />
      {false ? <Outlet /> : <PageLogin />}
      <Footer isPublicPage={false} />
    </>
  );
}
