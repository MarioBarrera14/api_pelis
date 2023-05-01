import { Request, Response } from 'express';
import { Movie } from '../models/movieModel';

export const getMovies = (req: Request, res: Response) => {
    // Lógica para obtener todas las películas de la base de datos
};

export const getMovieById = (req: Request, res: Response) => {
    // Lógica para obtener una película específica de la base de datos
};

export const createMovie = (req: Request, res: Response) => {
    // Lógica para crear una nueva película en la base de datos
};

export const updateMovie = (req: Request, res: Response) => {
    // Lógica para actualizar una película existente en la base de datos
};

export const deleteMovie = (req: Request, res: Response) => {
    // Lógica para eliminar una película de la base de datos
};
