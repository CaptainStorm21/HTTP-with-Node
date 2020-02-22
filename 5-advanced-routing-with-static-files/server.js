const express = require ('express');
const app = express();
const router = express.Router();
const data = require ('./data')

router.get('/employees', (req, res) => res.send (data));

// app.use('/api', router);
app.use(express.static('images'));
//localhost:3000/static/ 
app.use('/static', express.static('images'));
    
const port = 3000;

app.listen(3000, () => console.info(`Server is running on server ${port}`));


//create a folder images and put al your jpgs there