import { LoginForm } from "../components/form/LoginForm";
import { PageTitle } from "../components/page-title/PageTitle";

export function PageLogin() {
  return (
    <div className="container">
      <PageTitle title="Login" />
      <LoginForm />
    </div>
  );
}
