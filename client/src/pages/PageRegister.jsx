import { RegisterForm } from "../components/form/RegisterForm";
import { PageTitle } from "../components/page-title/PageTitle";

export function PageRegister() {
  return (
    <div className="container">
      <PageTitle title="Register" />
      <RegisterForm />
    </div>
  );
}
