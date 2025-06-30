import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { CategoriesTable } from "../../../components/table/CategoriesTable";

export function PageDraftCategories() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Draft categories" />
      <CategoriesTable />
    </main>
  );
}
