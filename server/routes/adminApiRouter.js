import express from "express";
import { getLogout } from "../api/admin/getLogout.js";
import { getAllMovies } from "../api/admin/getAllMovies.js";
import { getMovieBySlug } from "../api/admin/getMovieBySlug.js";
import { getMoviesByCategory } from "../api/admin/getMoviesByCategory.js";
import { getAllCategories } from "../api/admin/getAllCategories.js";

export const adminApiRouter = express.Router();

adminApiRouter.get("/logout", getLogout);

adminApiRouter.get("/movies", getAllMovies);
adminApiRouter.get("/movies/:slug", getMovieBySlug);
adminApiRouter.get("/movies-by-category/:slug", getMoviesByCategory);

adminApiRouter.get("/categories", getAllCategories);
