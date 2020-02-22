const express = require ('express');
const app = express();

app.get('api/employees', (req, res) => res.send('Hello World!'));

const port = 3000;

app.listen(3000, () => console.info(`Server is up on server ${port}`));