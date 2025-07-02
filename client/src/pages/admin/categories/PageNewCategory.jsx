import { CategoryForm } from "../../../components/form/Category";
import { AdminTitle } from "../../../components/page-title/AdminTitle";

export function PageNewCategory() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="New category" />
      <CategoryForm />
    </main>
  );
}
