import { Router } from 'express';
const router = Router();
router.get('/peliculas', (req, res) => {
    // Aquí puedes devolver todas las películas
});

router.get('/peliculas/:id', (req, res) => {
    const id = req.params.id;
    // Aquí puedes devolver una película específica según el ID
});

router.post('/peliculas', (req, res) => {
    // Aquí puedes crear una nueva película con los datos enviados en el cuerpo de la solicitud
});

router.put('/peliculas/:id', (req, res) => {
    const id = req.params.id;
    // Aquí puedes actualizar una película específica según el ID con los datos enviados en el cuerpo de la solicitud
});

router.delete('/peliculas/:id', (req, res) => {
    const id = req.params.id;
    // Aquí puedes eliminar una película específica según el ID
});

export default router;
