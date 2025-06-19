import { connection } from "../db.js";

export async function getAllMovies(req, res) {
  try {
    const sql = `
            SELECT *
            FROM movies;`;
    const [result] = await connection.execute(sql);
    return res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      data: [],
      msg: "Serverio klaida",
    });
  }
}
