import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeDraft } from "../badge/BadgeDraft";
import { BadgeSuccess } from "../badge/BadgeSuccess";
import defaultImg from "../../assets/default.webp";
import { formatMovieDuration } from "../../lib/formatMovieDuration";

export function MoviesTableRow({ data }) {
  const img = data.thumbnail ? `http://localhost:5437/img/movie-thumbnails/${data.thumbnail}` : defaultImg;

  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <img style={{ maxWidth: "5rem", maxHeight: "5rem" }} src={img} alt="Movie thumbnail" />
      </td>
      <td>{data.title}</td>
      <td>{data.url_slug}</td>
      <td>{data.description ? <BadgeSuccess text="Provided" /> : <BadgeDanger text="Missing" />}</td>
      <td>{formatMovieDuration(data.duration)}</td>
      <td>{data.is_published ? <BadgeSuccess text="Published" /> : <BadgeDraft text="Draft" />}</td>
      <td>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <a className="btn btn-primary" href={`/admin/categories/${data.url_slug}/edit`}>
            Edit
          </a>
          <button data-id="4" className="btn btn-danger" type="button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
