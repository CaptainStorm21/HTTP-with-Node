const express = require ('express');
const app = express();
const router = express.Router();

router.get('/employees', (req, res) => res.send ('hello from node-express'));

app.use('/api', router);
    
const port = 3000;

app.listen(3000, () => console.info(`Server is running on server ${port}`));