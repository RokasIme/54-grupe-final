import { useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { PageTitle } from "../components/page-title/PageTitle";
import { LoginForm } from "../components/form/LoginForm";
import { UserContext } from "../context/UserContext";

export function PrivateLayout() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <div className="container">
          <PageTitle title="Unuathorized access" />
          <PageTitle title="Login first" />
          <LoginForm />
        </div>
      )}
      <Footer isPublicPage={false} />
    </>
  );
}
