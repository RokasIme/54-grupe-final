import { useContext } from "react";
import { CategoriesList } from "../../../components/categories/CategoriesList";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function PageCategories() {
  const { publicCategories } = useContext(CategoriesContext);

  return (
    <div className="container">
      <PageTitle title="All categories" />
      <CategoriesList data={publicCategories} />
    </div>
  );
}
