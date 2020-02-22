const express = require ('express');
const app = express();
const router = express.Router();
const data = require ('./data');
const port = 3000;


router.get('/employees', (req, res) => {
    console.log(req.query);
    console.log(req.query.page);
    return res.send(data);
});
// go to http://localhost:3000/api/employees?page=3

app.use('/api', router);
    

app.listen(3000, () => console.info(`Server is running on server ${port}`));

