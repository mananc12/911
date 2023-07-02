const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const getHospitalsData = require('./db');

app.use(cors()); // Enable CORS

(async () => {
  //await mongoDB();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/api/hospitals', async (req, res) => {
    try {
      const hospitals = await getHospitalsData();
      res.json(hospitals);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error fetching hospitals data' });
    }
  });


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
})();
