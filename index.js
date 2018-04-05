const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(4100, () => {

  console.log('Server started on port 4100');

});
