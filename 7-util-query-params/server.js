const express = require ('express');
const app = express();
const router = express.Router();
const data = require ('./data');
const port = 3000;

router.get('/employees', (req, res) => res.send(data));


router.get('/employees/:id', (req, res) => {
    const id = +req.params.id;
    //+ will convert a string to interger
    const employee = data.filter(d => d.id === id);
    return res.send(employee);
});

// go to http://localhost:3000/api/employees -- entire list
// go to http://localhost:3000/api/employees/2 - an individual record
// go to http://localhost:3000/api/employees/2232 - empty array because there is no record

app.use('/api', router);
    

app.listen(3000, () => console.info(`Server is running on server ${port}`));

