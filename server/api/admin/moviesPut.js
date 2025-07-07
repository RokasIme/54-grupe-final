import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function moviesPut(req, res) {
  const [errParams, msgParams] = IsValid.requiredFields(req.params, [{ field: "id", validation: IsValid.idAsString }]);

  if (errParams) {
    return res.status(400).json({
      status: "error",
      msg: msgParams,
    });
  }

  const [err, msg] = IsValid.requiredFields(
    req.body,
    [
      { field: "name", validation: IsValid.nonEmptyString },
      { field: "url", validation: IsValid.urlSlug },
    ],
    [
      { field: "img", validation: IsValid.nonEmptyString },
      { field: "description", validation: IsValid.nonEmptyString },
      { field: "minutes", validation: IsValid.positiveInteger },
      { field: "hours", validation: IsValid.positiveInteger },
      { field: "category", validation: IsValid.nonEmptyString },
      { field: "status", validation: IsValid.includesInList, options: ["draft", "publish"] },
    ]
  );

  if (err) {
    return res.status(400).json({
      status: "error",
      msg: msg,
    });
  }

  const { img, name, url, description, minutes, hours, category, status } = req.body;
  const duration = (hours ?? 0) * 60 + (minutes ?? 0);

  try {
    const sql = "SELECT * FROM movies WHERE url_slug = ? AND id != ?;";
    const [result] = await connection.execute(sql, [url, +req.params.id]);

    if (result.length > 0) {
      return res.status(400).json({
        status: "error",
        msg: "Toks filmas jau egzistuoja.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      msg: "Serverio klaida, pabandykite filma atnaujinti veliau1",
    });
  }

  let categoryId = 0;

  try {
    const sql = "SELECT * FROM categories WHERE url_slug = ?;";
    const [result] = await connection.execute(sql, [category]);

    if (result.length !== 1) {
      return res.status(400).json({
        status: "error",
        msg: "Tokia kategorija neegzistuoja.",
      });
    }

    categoryId = result[0].id;
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      msg: "Serverio klaida, pabandykite filma atnaujinti veliau1",
    });
  }

  try {
    const sqlColumns = ["title", "url_slug", "is_published", "duration"];
    const sqValues = [name, url, status === "publish" ? 1 : 0, duration];
    if (img) {
      sqlColumns.push("thumbnail");
      sqValues.push(img);
    }
    if (description) {
      sqlColumns.push("description");
      sqValues.push(description);
    }
    if (category) {
      sqlColumns.push("category_id");
      sqValues.push(categoryId);
    }

    const sql = `UPDATE movies SET ${sqlColumns.map((s) => s + " = ?").join(", ")} WHERE id = ?;`;
    const [result] = await connection.execute(sql, [...sqValues, +req.params.id]);

    if (result.affectedRows !== 1) {
      return res.status(500).json({
        status: "error",
        msg: "Serverio klaida, pabandykite filma atnaujinti veliau2",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      msg: "Serverio klaida, pabandykite filma atnaujinti veliau3",
    });
  }

  return res.json({
    status: "success",
    msg: "Filmas atnaujintas sekmingai",
  });
}
