import { useState, useEffect } from "react";
import { CategoriesList } from "./CategoriesList";

export function FeaturedCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5437/api/categories/featured", {
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
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Movies by category</h2>
      <CategoriesList data={data} />
    </div>
  );
}
