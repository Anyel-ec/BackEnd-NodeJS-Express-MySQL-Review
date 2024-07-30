const express = require('express');
const router = express.Router();
const getConnection = require('../conexion');

router.get('/electrodomestico/:id', (req, res) => {
    console.log('GET /electrodomestico/:id');
    getConnection(function(error, conn) {
        if (error) {
            res.sendStatus(400);
            return;
        }
        
        const { id } = req.params;
        conn.query('SELECT * FROM electrodomestico WHERE id_electrodomestico = ?', [id], function(error, rows) {
            conn.release();
            if (error) {
                res.status(400).send('No se ha podido obtener los datos');
                return;
            }
            
            if (rows.length === 0) {
                res.status(404).send('Electrodoméstico no encontrado');
                return;
            }
            
            const electrodomestico = rows[0];
            const { nombre, marca, modelo, cantidad } = electrodomestico;

            if (cantidad > 10) {
                res.json({
                    status: 'disponible',
                    data: { nombre, marca, modelo, fecha: electrodomestico.fecha }
                });
            } else if (cantidad > 0) {
                conn.query('SELECT * FROM electrodomestico WHERE cantidad < 10', (error, lowStockRows) => {
                    if (error) {
                        res.status(400).send('No se ha podido obtener los datos');
                        return;
                    }
                    res.json({
                        status: 'poco_disponible',
                        message: `El electrodoméstico ${nombre} de la marca ${marca} y modelo ${modelo}, cuenta con ${cantidad} unidades por lo que se debe sacar de bodega más unidades`,
                        data: lowStockRows
                    });
                });
            } else {
                conn.query('SELECT * FROM electrodomestico WHERE cantidad = 0', (error, noStockRows) => {
                    if (error) {
                        res.status(400).send('No se ha podido obtener los datos');
                        return;
                    }
                    res.json({
                        status: 'no_disponible',
                        message: `No existen unidades del electrodoméstico ${nombre} de la marca ${marca} y modelo ${modelo}, por lo que se debe importar un lote del producto`,
                        data: noStockRows
                    });
                });
            }
        });
    });
});

module.exports = router;
