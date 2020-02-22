const express = require ('express');
const app = express();

// app.get('/api/employees', (req, res) => res.send('Hello World!'));
// app.post('/api/employees', (req, res) => res.send('HTTP POST is in action'));
// app.all('/api/employees', (req, res) => res.send(`${req.method} is in action`));

//you can chain methods inside of the individual routes
app.route('api/empoyees')
    .get((req, res) => res.send('GET'))
    .post((req, res) => res.send('POST'));

    
const port = 3000;

app.listen(3000, () => console.info(`Server is running on server ${port}`));