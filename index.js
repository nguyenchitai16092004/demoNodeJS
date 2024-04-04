const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server đã chạy với port ${port}`);
});