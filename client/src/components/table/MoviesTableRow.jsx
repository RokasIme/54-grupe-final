import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeDraft } from "../badge/BadgeDraft";
import { BadgeSuccess } from "../badge/BadgeSuccess";
import defaultImg from "../../assets/default.webp";
import { formatMovieDuration } from "../../lib/formatMovieDuration";
import { useContext } from "react";
import { MoviesContext } from "../../context/movies/MoviesContext";

export function MoviesTableRow({ movie }) {
  const { adminDeleteMovie } = useContext(MoviesContext);
  const img = movie.thumbnail ? `http://localhost:5437/img/movie-thumbnails/${movie.thumbnail}` : defaultImg;

  function handleDeleteClick() {
    fetch("http://localhost:5437/api/admin/movies/" + movie.id, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminDeleteMovie(movie.id);
        }
      })
      .catch(console.error);
  }

  return (
    <tr>
      <td>{movie.id}</td>
      <td>
        <img style={{ maxWidth: "5rem", maxHeight: "5rem" }} src={img} alt="Movie thumbnail" />
      </td>
      <td>{movie.title}</td>
      <td>{movie.url_slug}</td>
      <td>{movie.description ? <BadgeSuccess text="Provided" /> : <BadgeDanger text="Missing" />}</td>
      <td>{formatMovieDuration(movie.duration)}</td>
      <td>{movie.is_published ? <BadgeSuccess text="Published" /> : <BadgeDraft text="Draft" />}</td>
      <td>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <a className="btn btn-primary" href={`/admin/categories/${movie.url_slug}/edit`}>
            Edit
          </a>
          <button onClick={handleDeleteClick} className="btn btn-danger" type="button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
