// https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/', (req, res) => { 
  console.log("Got the filtered event");
  res.send({ express: 'Filtered' });
});