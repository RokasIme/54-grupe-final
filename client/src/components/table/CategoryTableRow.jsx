import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeDraft } from "../badge/BadgeDraft";
import { BadgeSuccess } from "../badge/BadgeSuccess";

export function CategoryTableRow({ data }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.count}</td>
      <td>{data.url_slug}</td>
      <td>{data.description ? <BadgeSuccess text="Provided" /> : <BadgeDanger text="Missing" />}</td>
      <td>{data.is_published ? <BadgeSuccess text="Published" /> : <BadgeDraft text="Draft" />}</td>
      <td>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <a className="btn btn-primary" href="/admin/categories/biography/edit">
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
