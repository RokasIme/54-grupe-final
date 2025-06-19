import { useState } from "react";
import { CategoriesList } from "./CategoriesList";
import { useEffect } from "react";

export function AllCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5435/api/categories", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setData(() => data.data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">All categories</h2>
      <CategoriesList data={data} />
    </div>
  );
}
