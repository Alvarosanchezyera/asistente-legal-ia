const express = require('express');
const bodyParser = require('body-parser');
const chatRoute = require('./routes/chat');

const app = express();
app.use(bodyParser.json());

app.use('/api/chat', chatRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
