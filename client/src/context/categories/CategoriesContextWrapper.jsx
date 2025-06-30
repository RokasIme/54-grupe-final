import { useEffect, useState } from "react";
import { initialCategoriesContext } from "./initialCategoriesContext";
import { CategoriesContext } from "./CategoriesContext";

export function CategoriesContextWrapper(props) {
  const [categories, setCategories] = useState(initialCategoriesContext.categories);

  useEffect(() => {
    fetch("http://localhost:5437/api/admin/categories", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setList(data.list);
        }
      })
      .catch(console.error);
  }, []);

  function setList(data) {
    setCategories(() => data);
  }

  function create() {}

  function edit() {}

  function remove() {}

  const value = {
    categories,
    setList,
    create,
    edit,
    remove,
  };

  return <CategoriesContext.Provider value={value}>{props.children}</CategoriesContext.Provider>;
}
