import express from 'express';
import movieRoutes from './routes/movieRoutes';
import ejs from 'ejs';

const app = express();

// Configuramos EJS como motor de vistas
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api', movieRoutes);

// Renderizamos la vista de películas con EJS
app.get('/peliculas', (req, res) => {
    res.render('peliculas.ejs');
});

export default app;

