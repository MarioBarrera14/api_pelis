import sqlite3 from 'sqlite3';

const DB_PATH = './data/pelis.db';

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log(`Conectado a la base de datos SQLite en ${DB_PATH}`);
});

export default db;
