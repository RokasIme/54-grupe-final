import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function moviesDelete(req, res) {
  const [err, msg] = IsValid.requiredFields(req.params, [{ field: "id", validation: IsValid.idAsString }]);

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
  }

  try {
    const sql = `DELETE FROM movies WHERE id = ?;`;
    const [result] = await connection.execute(sql, [+req.params.id]);
    if (result.affectedRows === 1) {
      return res.json({
        status: "success",
        msg: "Filmas istrinta sekmingai",
      });
    } else {
      return res.json({
        status: "success",
        msg: "Filmas nebuvo istrinta",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      msg: "Serverio klaida",
    });
  }
}
