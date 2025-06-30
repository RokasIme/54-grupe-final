import { useState } from "react";
import { MovieList } from "../../../components/movies/MovieList";
import { useEffect } from "react";
import { Placeholder } from "../../../components/placeholder/placeholder";
import { PageTitle } from "../../../components/page-title/PageTitle";

export function PageMovies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5437/api/movies", {
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
      <PageTitle title="All movies" />
      <Placeholder text="Filter" />
      <MovieList data={data} />
    </div>
  );
}
