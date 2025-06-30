import { useEffect, useState } from "react";
import { CategoriesList } from "../../../components/categories/CategoriesList";
import { PageTitle } from "../../../components/page-title/PageTitle";

export function PageCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5437/api/categories", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setData(() => data.list);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <PageTitle title="All categories" />
      <CategoriesList data={data} />
    </div>
  );
}
