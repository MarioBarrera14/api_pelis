import express from 'express';
import router from './routes/movieRoutes';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const port = 5000;

// Conexión a la base de datos
(async () => {
    try {
        const db = await open({
            filename: './database.sqlite',
            driver: sqlite3.Database
        });
        console.log('Conexión a la base de datos establecida');
        // Configuramos la base de datos en el objeto app para que esté disponible en todas las rutas
        app.set('db', db);
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
})();

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('peliculas');
})

app.get('/api/peliculas', async (req, res) => {
    try {
        const db = req.app.get('db');
        const rows = await db.all('SELECT * FROM peliculas');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las películas');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
