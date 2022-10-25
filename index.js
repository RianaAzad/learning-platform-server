const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('api running new');
});

app.listen(port, () => {
    console.log('api running on port', port);
})