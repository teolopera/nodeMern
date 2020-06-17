const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        /* EL ARCHIVO ESTARA EN UPLOADS, POR LO TANTO SALIMOS DE LA CARPETA Y CREAMOS UNA
        LLAMADA FILES */
        destination: path.resolve(__dirname, '..', '..', 'files'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext);

            /* REPLACE: CON ESTO QUITAMOS LOS ESPACIOS DEL STRING */
            cb(null, `${name.replace(/\s/g,"")}-${Date.now()}${ext}`)
        }
    })
}

/* ANOTACIONES */
/*
 * cb => Callback - Haz algo con la funcion y luego cuando termines, usa el callback
 * y resolve algo.
*/