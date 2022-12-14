require('dotenv').config();
const express = require('express');
const handle404Error = require('./middlewares/handle404Error');
const handleError = require('./middlewares/handleError');
const cors = require("cors");


const usuarios = require('./routes/usuarioRoute');
const produtos = require('./routes/produto.route');
const mesas = require('./routes/mesa.route');
const pedidos = require('./routes/pedido.route')
const itensPedido = require('./routes/itemPedido.route')

const app = express();
app.use(express.json());
const corsConfig = {
    origin: "*",
}
app.use(cors(corsConfig));

app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use('/mesas', mesas);
app.use('/pedidos', pedidos);
app.use('/itensPedido', itensPedido);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT || 3000, () => { console.log(`rodando na porta ${process.env.PORT}`) })