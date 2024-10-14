// index.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const mysqlConnection = require('./src/database/db');
const maquinasvirtualesRouter = require('./src/routers/maquinasvirtualesRouter');
const computadorasRouter = require('./src/routers/computadorasRouter');
const requerimientosRouter = require('./src/routers/requerimientosRouter');
const laboratoriosRouter = require('./src/routers/laboratoriosRouter');
const docentesRouter = require('./src/routers/docentesRouter');
const { routerLogin, verificarToken } = require('./src/routers/loginRouter');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Corriendo servidor");
});

// Rutas
app.use('/api/', maquinasvirtualesRouter);
app.use('/api/', computadorasRouter);
app.use('/api/', requerimientosRouter);
app.use('/api/', laboratoriosRouter);
app.use('/api/', docentesRouter);
app.use('/api/login', routerLogin);


// Ruta para guardar imagenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

// Rutas
app.get("/upload", (req, res) => {
    mysqlConnection.query('SELECT * FROM files', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;

    const filesImg = {
        nombre: file.filename,
        imagen: file.path,
        fecha_creacion: null
    }

    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400;
        return next(error)
    }

    mysqlConnection.query('INSERT INTO files set ?', [filesImg], (err, rows, fields) => {
        if (!err) {
            res.json(filesImg.imagen);
        } else {
            console.log(err);
        }
    });

});

app.delete('/delete/:id', (req, res) => {

    const { id } = req.params;
    deleteFile(id);
    mysqlConnection.query('DELETE FROM files WHERE id = ?', [id]);
    res.json({ message: "The file was deleted" });
});

function deleteFile(id) {

    mysqlConnection.query('SELECT * FROM files WHERE id = ?', [id], (err, rows, fields) => {
        [{ imagen }] = rows;
        fs.unlink(path.resolve('./' + imagen)).then(() => {
            console.log('Imagen eliminada');
        }).catch(err => { console.error('no exite el archivo') })
    });

}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
