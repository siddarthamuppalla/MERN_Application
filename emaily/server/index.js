const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({bye: 'there'});
})

const PORT = process.env.PORT || 5222;
app.listen(PORT);
