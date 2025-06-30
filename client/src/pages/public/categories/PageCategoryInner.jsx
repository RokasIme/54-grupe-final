import { useParams } from "react-router";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { capitalize } from "../../../lib/capitalize";
import { useEffect, useState } from "react";
import { MovieList } from "../../../components/movies/MovieList";

export function PageCategoryInner() {
  const params = useParams();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5437/api/movies-by-category/" + params.category, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setMoviesData(() => data.list);
        }
      })
      .catch(console.error);
  }, [params.category]);

  return (
    <div className="container">
      <PageTitle title={capitalize(params.category)} />
      <MovieList data={moviesData} />
    </div>
  );
}
