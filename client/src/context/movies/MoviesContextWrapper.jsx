import { useContext, useEffect, useState } from "react";
import { initialMoviesContext } from "./initialMoviesContext";
import { MoviesContext } from "./MoviesContext";
import { UserContext } from "../user/UserContext";

export function MoviesContextWrapper(props) {
  const [publicMovies, setPublicMovies] = useState(initialMoviesContext.publicMovies);
  const [adminMovies, setAdminMovies] = useState(initialMoviesContext.adminMovies);

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      fetch("http://localhost:5437/api/public/movies", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setPublicMoviesList(data.list);
          }
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5437/api/admin/movies", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setAdminMoviesList(data.list);
          }
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  function setPublicMoviesList(data) {
    setPublicMovies(() => data);
  }

  function setAdminMoviesList(data) {
    setAdminMovies(() => data);
  }

  function adminCreateMovie() {}

  function adminEditMovie() {}

  function adminRemoveMovie() {}

  const value = {
    publicMovies,
    adminMovies,
    setPublicMovies,
    setAdminMoviesList,
    adminCreateMovie,
    adminEditMovie,
    adminRemoveMovie,
  };

  return <MoviesContext.Provider value={value}>{props.children}</MoviesContext.Provider>;
}
