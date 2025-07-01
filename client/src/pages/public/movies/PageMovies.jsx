import { useContext } from "react";
import { MovieList } from "../../../components/movies/MovieList";
import { Placeholder } from "../../../components/placeholder/placeholder";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { MoviesContext } from "../../../context/movies/MoviesContext";

export function PageMovies() {
  const { publicMovies } = useContext(MoviesContext);

  return (
    <div className="container">
      <PageTitle title="All movies" />
      <Placeholder text="Filter" />
      <MovieList data={publicMovies} />
    </div>
  );
}
